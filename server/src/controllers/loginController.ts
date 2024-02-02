import jwt from 'jsonwebtoken';
import { Request, Response } from "express";

export default (req: Request, res: Response) => {
    if (req.body.username === "admin" &&
        req.body.password === process.env.ADMIN_PASSWORD){
        const token = jwt.sign({
            userId: 1,
        }, process.env.JWT_SECRET!);

        res.json({token});
    } else if (req.body.username === "guest" &&
               req.body.password === process.env.GUEST_PASSWORD
            ){
        const token = jwt.sign({
            userId: 2,
        }, process.env.JWT_SECRET!);

        res.json({token});
    } else{
        res.status(401).send('Wrong Password!')
    }
}