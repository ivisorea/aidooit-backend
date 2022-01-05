import s3 from '../s3/s3.js';
import 'dotenv/config.js';
const bucketName = process.env.AWS_BUCKET_NAME;
import multerS3 from 'multer-s3';
import multer from 'multer';

//upload file to s3
export const upload = multer({
    storage: multerS3({
      s3: s3,
      bucket: bucketName,
      metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) {
        cb(null, Date.now().toString())
      }
    })
  })
  