import 'dotenv/config.js';
import multerS3 from 'multer-s3';
import multer from 'multer';
import aws from 'aws-sdk/global.js';
import S3 from 'aws-sdk/clients/s3.js';

const bucketName = process.env.AWS_BUCKET_NAME;

aws.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_BUCKET_REGION
});
const s3 = new S3();

//Upload file to s3
export const upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: bucketName,
      metadata: function (req, file, cb) {
        
        cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) {
        const extension = file.mimetype.split("/")[1];
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, `${file.fieldname}-${uniqueSuffix}.${extension}`);
      }
    })
  })
  // const extension = file.mimetype.split("/")[1];
  // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
  // cb(null, `${file.fieldname}-${uniqueSuffix}.${extension}`);
  
  //Download file from s3
  export const download = multer({
    storage: multerS3({
      s3: s3,
      bucket: bucketName
    })
  })

  