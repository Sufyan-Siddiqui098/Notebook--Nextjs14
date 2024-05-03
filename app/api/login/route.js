import { connectToDatabase } from "@/app/lib/connectDatabase"
import User from "@/model/user.model";
import jwt from 'jsonwebtoken'
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server";

connectToDatabase()
export const POST = async (req, res) => {
    try {
        const {email, password} = await req.json();

        // Check if user exist
        const user = await User.findOne({email}) 
        if(!user){
            return NextResponse.json({message: "User doesn't exist"}, {status: 400})
        }
        
        //Check if the password is correct  
        const validatePasasword = await bcrypt.compare(password, user.password)
        if(!validatePasasword){
            return NextResponse.json({message: "Invalid password"}, {status: 401})
        }

        //Create token data
        const tokenData = {
            id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            username: user.username,
            email: user.email
        }

        //Create token
        const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY,{expiresIn: '1d'})

        //Crate response 
        const response = NextResponse.json({
            message: "Login Successfully",
            success: true,
            // token
        })
        // set the cookies 
        response.cookies.set("token", token, {
            httpOnly: true
        })
        return response;

    } catch (error) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
} 