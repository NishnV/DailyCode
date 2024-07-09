import { Request, Response } from "express";
import { Problem } from "../models/Problem";

export const viewProblem = async (req: Request, res: Response) => {
    console.log('function entered');

    try {
        const response = await Problem.find();
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: 'error' });
    }
};