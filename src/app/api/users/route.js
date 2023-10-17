import { NextResponse } from "next/server";
import { connectDB } from "@/app/helper/db";
import { User } from "@/models/user";
import bcrypt from "bcryptjs"

connectDB();

//Get function
export async function GET(request){
    let users=[];
    try{
        users=await User.find().select("-password");
    }catch(error){
        console.log(error);
        return NextResponse.json({
            message:"failed to get users",
            success:false
        });
    }
    return NextResponse.json(users);
}



//Post function (Create a User)
export async function POST(request){
    const {name,email,password,about,profileURL}=await request.json()

    const user=new User({
        name,
        email,
        password,
        about,
        profileURL
    });

    try{
        user.password=bcrypt.hashSync(user.password,parseInt(process.env.BCRYPT_SALT))
        const createdUser = await user.save();
        const response= NextResponse.json(
        createdUser,{
            status:201
        });
        return response;
    }catch(error){
        console.log(error);
        return NextResponse.json({
            message:"failed to create user!!",
            status: false,
        },{status:500});
    }
}