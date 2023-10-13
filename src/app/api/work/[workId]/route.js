import { getResponseMessage } from "@/app/helper/responseMessage";
import { Work } from "@/models/work";
import { NextResponse } from "next/server";

export const GET= async (request,{params})=>{
    const {workId}=params;
    

    try{
        const foundWork=await Work.findById(workId);
        return NextResponse.json(foundWork);
    }catch(error){
        console.log(error)
       return getResponseMessage("Error",404,false);
    }
}

export const PUT= async (request,{params})=>{
    const {workId}=params;
    const {title, content, status}=await request.json();

   

    try{
        let work=await Work.findById(workId);
        work.title=title;
        work.content=content;
        work.status=status;

        const updatedWork=await work.save();

        return NextResponse.json(updatedWork);
    }catch(error){
        console.log(error)
        return NextResponse.json({
            message:"failed to update data",
            success:false
        });
    }
}

export const DELETE= async (request,{params})=>{
    const {workId}=params;
    try{
        await Work.deleteOne({_id:workId});
        return NextResponse.json({
            message:"Successfully deleted",
            success:true
        });
    }catch(error){
        console.log(error)
        return NextResponse.json({
            message:"failed to delete data",
            success:false
        });
    }
}
