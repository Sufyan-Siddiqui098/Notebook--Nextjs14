import { connectToDatabase } from "@/app/lib/connectDatabase"
import User from "@/model/user.model";
import { NextResponse } from "next/server";
import { decodeToken } from "@/app/lib/decodeUser";

connectToDatabase()
export const GET = async (req, res) => {
    try {
        const token = req.cookies.get("token")?.value;
        if (!token) {
            return NextResponse.json({ message: "Something Went Wrong, Please Login " }, { status: 401 });
        }
        const { _id } = decodeToken(token);
        const user = await User.findById(_id).select("email firstname lastname -_id");
        if(!user){
            return NextResponse.json({message: "Invalid User id"}, {status: 404})
        }

        return NextResponse.json({
            message:"User Fetched Successfully ",
            success: true,
            user
        })


    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
} 