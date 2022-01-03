import { Router } from "express";
import { uploadsResponse } from "../controllers/uploads.js";
import imageUploader from "../middleware/imageUploader.js";
import verifyToken from "../middleware/verifyToken.js";
import { upload } from "../s3/s3.js";

const imagesUploadRouter = Router();

imagesUploadRouter.post("/", verifyToken, imageUploader.single('profile_pic'), uploadsResponse);
imagesUploadRouter.post("/s3", verifyToken, upload.single('file'), (req, res, next) => {
    console.log(req.file);
    console.log(req.file.location);
    res.json({
        data: req.files,
        msg: 'Successfully uploaded ' + req.file.originalname + ' files!'
    });
});
    

export default imagesUploadRouter;