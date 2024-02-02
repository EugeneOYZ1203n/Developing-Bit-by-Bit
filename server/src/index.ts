import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import mongoose from 'mongoose';

import router from './router';

dotenv.config();

const app = express();

app.use(express.json())
app.use(cors());
app.use(morgan('tiny')); 

app.use(router);

mongoose.connect(process.env.MONGO_URI!).then(()=>{
    app.listen(8080);
    console.log("App started listening on 8080")
})
