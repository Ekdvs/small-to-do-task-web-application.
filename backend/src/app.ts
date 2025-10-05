import express from 'express';
import cors from "cors";
import taskRouter from './routes/taskRoutes';
import dotenv from "dotenv"

dotenv.config();

const app=express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/tasks',taskRouter)



export default app;