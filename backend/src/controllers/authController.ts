import { Request, Response } from "express";
import { User, IUser } from "../models/User";
import { sign } from 'jsonwebtoken'


const JWT_SECRET = 'E13u6RJTQ05fmTL0MVPNGeu+Yafgp1bjGfVUlg7Qp/M=';


export const signup = async ( req : Request, res : Response ) => {
    const { username,email,password } = req.body;

    try {

        const existingUser = await User.findOne({ email });

        if (existingUser){
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = new User({username,email,password});

        await user.save();

        const token = sign({ userId : user._id }, JWT_SECRET, { expiresIn : '1h' });

        return res.status(201).json(
            {   
                token
            }
        );
        
    } catch (error) {

        console.log(error);

        return res.status(400).json({
            message : 'Server Error'
        });
        
    }
};


export const login = async(req : Request, res : Response) => {

    const { email, password } = req.body;

    try {
        
        const user = await User.findOne({ email });

        if(!user){
            return res.status(400).json(
                {
                    message : 'Invalid User'
                }
            );
        }

        const isMatch = await user.comparePassword(password);

        if (!isMatch){
            return res.status(201).json({
                message : 'Password Incorrect'
            });
        }

        const token = sign({ userId : user._id }, JWT_SECRET, { expiresIn : '1h' });

        return res.status(201).json({ token });

    } catch (error) {



        res.status(500).json({
            message : "Server Error"
        });
        
    }

};