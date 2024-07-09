import { Router } from "express";
import { viewProblem } from "../controllers/viewProblems";

export const probRoute = Router();

probRoute.get('/', viewProblem);