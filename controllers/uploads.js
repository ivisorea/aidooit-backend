import ErrorResponse from "../utils/ErrorResponse.js";
import 'dotenv/config.js';
const bucketName = process.env.AWS_BUCKET_NAME;
import s3 from '../s3/s3.js';

export const uploadsResponse = (req, res) => {
    const { file } = req;
    if (!file) throw new ErrorResponse('Please upload a file', 400);
    res.json({ location: `http://localhost:4000/${file.filename}` });
};

// Upload file to s3
export const uploadsResponseS3 = (req, res, next) => {
    console.log(req.file);
    console.log(req.file.location);
    if (!req.file) throw new ErrorResponse('Please upload a file', 400);
    res.json({ 
        key: req.file.key,
        location: req.file.location,
        data: req.files,
        msg: 'Successfully uploaded ' + req.file.originalname + ' files!'
    });
};


export const getImageS3 = (req, res, next) => {
    const {Key} = req.params
    console.log(Key)
    try {
        const url = s3.getSignedUrl('getObject', {
          Bucket: bucketName, 
          Key: Key,
          Expires: 60 * 1,
        })
        console.log(url)
    } catch (err) {
      console.log(err)
    }
   
};