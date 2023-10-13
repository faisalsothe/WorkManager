import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";

export async function POST(request){
    const {email,password}=await request.json();

    try{
        //1. get user
        const user=await User.findOne({email:email});
        if(user===null){
            throw new Error("User Not Found");
        }
        //2. password check
        const matched=bcrypt.compareSync(password,user.password);
        if(!matched){
            throw new Error("Password not matched!!");
        }
        //3. generate token
        const authToken=jwt.sign({
            _id:user._id,
            name:user.name
        },process.env.JWT_KEY);
        //4. create NextResponse-- cookie
        const response=NextResponse.json({
            message:"Login Success",
            user:user
        })
        //5.Send token in cookies
        response.cookies.set("authToken",authToken,{
            expiresIn:"1d",
            httpOnly:true
        });
        return response;
    }catch(error){
        console.log(error);
        return NextResponse.json({
            message:"Failed",
            success:false
        },{
            status:500
        });
    }
    
}