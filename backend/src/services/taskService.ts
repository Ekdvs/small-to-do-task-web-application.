import { PrismaClient } from "@prisma/client";

const prisma=new PrismaClient();

//get resenr five tasks
export const getRecentTasks=async()=>{
    return prisma.task.findMany({
        where:{completed:false},
        orderBy:{createdAt:'desc'},
        take:5
    });
}

//create a new task
export const createTask=async(title:string,description:string)=>{
    return prisma.task.create({
        data:{
            title,
            description
        }
    });
}

//markTaskAsCompleted
export const markTaskDone=async(id:number)=>{
    const task=await prisma.task.findUnique({
        where:{id}
    });
    if(!task){
        return null;
    }

    return prisma.task.update({
        where:{id},
        data:{completed:true}
    })
}