import { User } from "@/models/user";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const authToken = request.cookies.get("authToken").value;
    if (!authToken) {
      return NextResponse.json({error:"JWT MUST BE PROVIDED!!"});
    }
    const data = jwt.verify(authToken, process.env.JWT_SECRET);
    const userData = await User.findById(data._id).select("-password");
    return NextResponse.json(userData);
  } catch (error) {
    // Handle JWT errors based on the error type
    if (error.name === "JsonWebTokenError") {
      // JWT is invalid
      return NextResponse.json({ error: "Invalid token" });
    } else if (error.name === "TokenExpiredError") {
      // JWT has expired
      return NextResponse.json({ error: "Token has expired" });
    } else {
      // Handle other errors or unexpected issues
      return NextResponse.json({ error: "An error occurred" });
    }
  }
}
