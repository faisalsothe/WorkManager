import { httpAxios } from "@/app/helper/httpHelper";


export async function signUp(user){
    const result=await httpAxios.post("/api/users",user)
    .then((response)=>response.data);
    return result;
}

export async function logIn(logInData){
    const result=await httpAxios.post("/api/login",logInData)
    .then((response)=>response.data);
    return result;
}

export async function currentUser(){
    const result=await httpAxios.get("/api/current")
    .then((response)=>response.data);
}

export async function logout(){
    const result=await httpAxios.post("/api/log-out")
    .then((response)=>response.data);
    return result;
}