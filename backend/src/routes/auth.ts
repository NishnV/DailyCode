import { Router } from "express";
import { signup,login } from "../controllers/authController";


export const route = Router();

route.post('/signup',signup);
route.post('/login',login);


