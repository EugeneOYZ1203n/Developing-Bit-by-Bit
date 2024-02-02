import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

export default (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    const token = authHeader!.split(' ')[1] //Getting token from "Bearer 'token' format"
        
    interface JwtPayload {
        userId: number;
    }

    const decoded = jwt.decode(token) as JwtPayload
    const userId = decoded!.userId;

    if (userId === 1){
        console.log('is Admin')
        next()
    }
    else{
        res.status(403).send('Not an admin');
    }
}