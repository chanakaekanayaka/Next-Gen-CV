import express from "express";
import { loginUser, registerUser, getUserById } from "../controllers/userController";
import protect from "../middlewares/authMiddleware";


const userRouter = express.Router();

userRouter.post('/register',registerUser);
userRouter.post('/login',loginUser);
userRouter.post('/data',protect, getUserById);

export default userRouter;
