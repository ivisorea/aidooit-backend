import { Router } from "express";
import { getMe, signUp, signIn, getAllUsers } from "../controllers/users.js";
import verifyToken from "../middleware/verifyToken.js";


const usersRouter = Router();

usersRouter.post('/signup', signUp);
usersRouter.post('/signin', signIn);
usersRouter.get('/me',verifyToken, getMe);
usersRouter.get('/', getAllUsers);

export default usersRouter;