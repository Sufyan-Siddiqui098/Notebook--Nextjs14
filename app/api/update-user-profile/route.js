import { connectToDatabase } from "@/app/lib/connectDatabase"
import User from "@/model/user.model";
import { NextResponse } from "next/server";
import { decodeToken } from "@/app/lib/decodeUser";
import bcrypt from "bcryptjs"


connectToDatabase()
export const POST = async (req, res) => {
    try {
        const token = req.cookies.get("token")?.value;
        if (!token) {
            return NextResponse.json({ message: "Something Went Wrong, Please Login " }, { status: 401 });
        }
        const { _id } = decodeToken(token);
        const {email, firstname, lastname, current_password, new_password} = await req.json();
        if(!email){
            return NextResponse.json({ message: "Email is required"}, {status: 401})
        }
        if(!current_password){
            return NextResponse.json({ message: "Current Password is required"}, {status: 401})
        }


        const user = await User.findOne({email});
        if(!user){
            return NextResponse.json({message: "User not found "}, {status: 404})
        }
        const validatePasasword = await bcrypt.compare(current_password, user.password)
        if(!validatePasasword){
            return NextResponse.json({message: "Invalid Current password"}, {status: 401})
        }

        if(!firstname || !lastname){
            return NextResponse.json({ message: "First & Last are required fields"}, {status: 401})
        }

        if(firstname !== user.firstname){
            user.firstname = firstname;
        }
        if(lastname !== user.lastname){
            user.lastname = lastname;
        }
        if(new_password){
             // hash password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(new_password, salt);
            user.password = hashedPassword;
        };

        await user.save();

        return NextResponse.json({
            message:"User Fetched Successfully ",
            success: true,
            user
        })


    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
} 