import { Router } from "express";
import { getMe, singUp, singIn } from "../controllers/users.js";


const usersRouter = Router();

usersRouter.post('/singup', singUp);
usersRouter.post('/singin', singIn);
usersRouter.get('/user', getMe);

export default usersRouter;