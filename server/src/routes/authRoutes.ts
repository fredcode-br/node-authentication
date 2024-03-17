import { Router } from "express";
import { AuthController } from "../controllers/AuthController";
import { authMiddleware } from "../middlewares/authMiddleware";

const authRoutes = Router();

authRoutes
    .post('/login', new AuthController().login);

authRoutes.use(authMiddleware);

authRoutes
    .get('/profile', new AuthController().getProfile);

export default authRoutes;
