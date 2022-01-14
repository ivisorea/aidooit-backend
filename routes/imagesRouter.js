import { Router } from "express";
import { uploadsResponse } from "../controllers/images.js";
import imageUploader from "../middleware/imageUploader.js";
import verifyToken from "../middleware/verifyToken.js";
import { upload } from "../middleware/imageUploaderS3.js";
import { uploadsResponseS3 } from "../controllers/images.js";

const imagesRouter = Router();

imagesRouter.post("/", verifyToken, imageUploader.single('file'), uploadsResponse);
imagesRouter.post("/s3",verifyToken, upload.array('file'), uploadsResponseS3);

export default imagesRouter;