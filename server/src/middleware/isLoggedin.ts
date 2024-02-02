import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export default (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if(!authHeader){
        res.status(401).send('invalid credentials');
    } else{
        const token = authHeader.split(' ')[1] //Getting token from "Bearer 'token' format"
        
        jwt.verify(token, process.env.JWT_SECRET!, (err,decoded)=>{
            if (err){
                res.status(403).send('invalid credentials');
            } else {
                next();
            }
        })
    }
}