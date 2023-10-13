import { User } from "@/models/user";
import jwt from "jsonwebtoken"
import { NextResponse } from "next/server";


export async function GET(request,response){

    const authToken=request.cookies.get("authToken")?.value;
    const data=jwt.verify(authToken,process.env.JWT_KEY);
    const userData=await User.findById(data._id).select("-password");
    return NextResponse.json(userData);

}