import { Router } from "express";
import { getMe, signUp, signIn, getAllUsers, updateUser } from "../controllers/users.js";
import verifyToken from "../middleware/verifyToken.js";


const usersRouter = Router();

usersRouter.post('/signup', signUp);
usersRouter.post('/signin', signIn);
usersRouter.get('/me',verifyToken, getMe);
usersRouter.get('/', getAllUsers);
usersRouter.put('/:id', verifyToken, updateUser);

export default usersRouter;