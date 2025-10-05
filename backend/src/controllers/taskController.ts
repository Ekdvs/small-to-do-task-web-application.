import { Request, Response } from "express";
import * as taskService from "../services/taskService";

//get recent five tasks
export const getRecentTasks= async(request:Request,response:Response)=>{
    try {
        // get recent five task from database
        const tasks=await taskService.getRecentTasks();
        response.status(200).json({
            data: tasks,
            message: "Recent tasks fetched successfully",
            error: false,
            success: true,
        });

    } catch (error) {
        console.error("Error fetching recent tasks:", error);
        response.status(500).json({
            error:"Internal server error"
        });
    }
}

//create a new task
export const createTask= async(request:Request,response:Response)=>{
    try {
        //get data from request body
        const {title,description}=request.body;

        //validate the input
        if(!title || !description){
            return response.status(400).json({
                message:"Title and description are required",
                error: true,
                success: false
            });
        }
        //create a new task in the database
        const newTask=await taskService.createTask(title,description);
        response.status(201).json({
            data: newTask,
            message: "Task created successfully",
            error: false,
            success: true
        });
    } catch (error) {
        console.error("Error creating task:", error);
        response.status(500).json({
            error:"Internal server error"
        });
    }
}

//mark task as completed
export const markTaskDone=async (request:Request,response:Response)=>{
    try {

        //get task id from request params
        const taskId = Number(request.params.id);

        if (!taskId) {
            return response.status(400).json({
                message: "Task ID is required",
                error: true,
                success: false
            });
        }
        
        //mark the task as completed in the database
        const updatedTask = await taskService.markTaskDone(taskId);
        if (!updatedTask) {
            return response.status(404).json({
                message: "Task not found",
                error: true,
                success: false
            });
        }

        response.status(200).json({
            data: updatedTask,
            message: "Task marked as done successfully",
            error: false,
            success: true
        });
    } catch (error) {
        console.error("Error marking task as done:", error);
        response.status(500).json({
            error:"Internal server error"
        });
    }
}