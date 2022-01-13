import { Router } from "express";
import { getImageS3, uploadsResponse } from "../controllers/images.js";
import imageUploader from "../middleware/imageUploader.js";
import verifyToken from "../middleware/verifyToken.js";
import { upload } from "../middleware/imageUploaderS3.js";
import { uploadsResponseS3 } from "../controllers/images.js";

const imagesRouter = Router();

imagesRouter.post("/", verifyToken, imageUploader.single('file'), uploadsResponse);
imagesRouter.post("/s3",verifyToken, upload.array('file'), uploadsResponseS3);
imagesRouter.get("/:Key", getImageS3);

export default imagesRouter;