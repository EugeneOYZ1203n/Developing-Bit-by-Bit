import jwt from 'jsonwebtoken';
import { Request, Response } from "express";

export default (req: Request, res: Response) => {
    if (req.body.username === process.env.ADMIN_USERNAME &&
        req.body.password === process.env.ADMIN_PASSWORD){
        const token = jwt.sign({
            userId: Number(process.env.ADMIN_ID),
        }, process.env.JWT_SECRET!);

        res.json({token, isAdmin:true});
    } else if (req.body.username === process.env.GUEST_USERNAME &&
               req.body.password === process.env.GUEST_PASSWORD
            ){
        const token = jwt.sign({
            userId: Number(process.env.GUEST_ID),
        }, process.env.JWT_SECRET!);

        res.json({token, isAdmin:false});
    } else{
        res.status(401).send('Wrong Password!')
    }
}