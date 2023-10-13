import { httpAxios } from "@/app/helper/httpHelper";

export async function addTask(task){
    const result=await httpAxios.post("/api/work",task)
    .then((response)=>response.data);
    return result;
}

export async function getTaskOfUser(userId){
    const result=await httpAxios.get(`/api/users/${userId}/work`)
    .then((response)=>response.data);
    return result;
}

export async function deleteTask(taskId){
    const result=await httpAxios.delete(`/api/work/${taskId}`)
    .then((response)=>response.data);
    return result;
}