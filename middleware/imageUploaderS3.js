import s3 from '../s3/s3.js';
import 'dotenv/config.js';
const bucketName = process.env.AWS_BUCKET_NAME;
import multerS3 from 'multer-s3';
import multer from 'multer';

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

  