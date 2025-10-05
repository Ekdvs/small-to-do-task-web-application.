import express from 'express';
import { createTask, getRecentTasks, markTaskDone } from '../controllers/taskController';


const taskRouter=express.Router();

//route to get recent five tasks
taskRouter.get('/recent-tasks',getRecentTasks);

//create a new task
taskRouter.post('/create-task',createTask);

//mark task as completed
taskRouter.patch('/mark-done/:id',markTaskDone);

export default taskRouter;