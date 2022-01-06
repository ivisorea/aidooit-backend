import { Router } from "express";
import { getImageS3, uploadsResponse } from "../controllers/uploads.js";
import imageUploader from "../middleware/imageUploader.js";
import verifyToken from "../middleware/verifyToken.js";
import { upload } from "../middleware/imageUploaderS3.js";
import { uploadsResponseS3 } from "../controllers/uploads.js";

const imagesUploadRouter = Router();

imagesUploadRouter.post("/", verifyToken, imageUploader.single('profile_pic'), uploadsResponse);
imagesUploadRouter.post("/s3", upload.single('file'), uploadsResponseS3);
imagesUploadRouter.get("/:Key", getImageS3);

export default imagesUploadRouter;