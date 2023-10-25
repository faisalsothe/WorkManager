import { User } from "@/models/user";
import { NextResponse } from "next/server";
import { Work } from "@/models/work";

//Delete User
export async function DELETE(request,{params}){
    const {userId}=params;

    try{
        await User.deleteOne({
            _id:userId
        });
        return NextResponse.json({
            message:"user deleted",
            success:true
        })
    }
    catch(error){
        return NextResponse.json({
            message:"error in deleting user",
            success:false
        });
    }
}

//Get specific user
export const GET=async (request,{params})=>{
    const {userId}=params;

    try{
        const user=await User.findById(userId).select("-password");
        return NextResponse.json(user);
    }catch(error){
        return NextResponse.json({
            message:"unable to find user",
            success:false
        });
    }
}

//Update specific user
export const PUT= async (request,{params})=>{
    const {userId} = params;
    const {name, password, about}=await request.json();
    try{
        const user=await User.findById(userId);
        user.name=name;
        user.password=password;
        user.about=about;

        const updatedUser=await user.save();
        return NextResponse.json(updatedUser);
    }catch(error){
        console.log(error);
        return NextResponse.json({
            message:"Updation failed",
            success:false
        });
    }
}