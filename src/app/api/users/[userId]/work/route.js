import { getResponseMessage } from "@/app/helper/responseMessage";
import { Work } from "@/models/work";
import { NextResponse } from "next/server";

export const GET=async (request,{params})=>{
    const {userId}=params;

    try{
        const tasks=await Work.find({userId:userId});
        return NextResponse.json(tasks)
    }catch(error){
        console.log(error);
        return getResponseMessage("Failed", 404,false);
    }
}