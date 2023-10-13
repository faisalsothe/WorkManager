
import { Work } from "@/models/work";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"


export const GET= async (request)=>{
    let work=[];
    try{
        work=await Work.find();
        return NextResponse.json(work);
    }catch(error){
        console.log(error)
        return NextResponse.json({
            message:"failed to retrieve data",
            success:false
        });
    }
}

export const POST= async (request)=>{
    const {title,content,userId,status}=await request.json();

    //fetching logged in user ID
    const authToken=request.cookies.get("authToken")?.value;
    const data=jwt.verify(authToken,process.env.JWT_KEY);
    try{
        const work=new Work({
            title,
            content,
            userId:data._id,
            status
        });

        const createdWork=await work.save();
        console.log(createdWork);
        return NextResponse.json(createdWork,{
            status:201
        });
    }
    catch(error)
    {
        console.log(error)
        return NextResponse.json({
            message:"failed to create data",
            success:false
        });
    }
}

