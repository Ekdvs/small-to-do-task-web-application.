import axios from "axios";

const BASE_URL="http://localhost:4000"

export type Task={
    id:number,
    title:string,
    description:string,
    completed:boolean
    createdAt:string

}

export const createTask = async (title:string,description:string)=>{
    const response =await axios.post(`${BASE_URL}/api/tasks/create-task`,{title,description});
    return response.data.data as Task;
}

export const getRecentTasks = async()=>{
    const response = await axios.get(`${BASE_URL}/api/tasks/recent-tasks`);
    return response.data.data as Task[];
}

export const markTaskDone = async(id:number)=>{
    const response = await axios.patch(`${BASE_URL}/api/tasks/mark-done/${id}`);
    return response.data.data as Task;
}

