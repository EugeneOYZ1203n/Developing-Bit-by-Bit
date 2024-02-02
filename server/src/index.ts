import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';

import router from './router';

const app = express();

app.get('/', (req: Request, res: Response)=>{
    res.send("Hello world");
})

app.listen(8080);