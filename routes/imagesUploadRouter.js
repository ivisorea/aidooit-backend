import { Router } from "express";
import { uploadsResponse } from "../controllers/uploads.js";
import imageUploader from "../middleware/imageUploader.js";
import verifyToken from "../middleware/verifyToken.js";

const imagesUploadRouter = Router();

imagesUploadRouter.post("/",verifyToken, imageUploader.single('profile_pic'), uploadsResponse);

export default imagesUploadRouter;