import { Router } from "express";
import { getMe, singUp, singIn, getAllUsers } from "../controllers/users.js";
import verifyToken from "../middleware/verifyToken.js";


const usersRouter = Router();

usersRouter.post('/singup', singUp);
usersRouter.post('/singin', singIn);
usersRouter.get('/me',verifyToken, getMe);
usersRouter.get('/', getAllUsers);

export default usersRouter;