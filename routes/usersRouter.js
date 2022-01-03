import { Router } from "express";
import { getMe, singUp, singIn } from "../controllers/users.js";
import verifyToken from "../middleware/verifyToken.js";


const usersRouter = Router();

usersRouter.post('/singup', singUp);
usersRouter.post('/singin', singIn);
usersRouter.get('/me',verifyToken, getMe);

export default usersRouter;