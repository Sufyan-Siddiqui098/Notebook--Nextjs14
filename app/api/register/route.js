import { connectToDatabase } from "@/app/lib/connectDatabase"
import User from "@/model/user.model";
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server";

connectToDatabase()
export const POST = async (req, res) => {
    try {
        const {email, firstname, lastname, username, password, resetkey} = await req.json();

        // Check if user exist
        const user = await User.findOne({email}) 
       if(user){
            return NextResponse.json({message: "Email already exist"}, {status: 400})
        }
        const duplicateUsername = await User.findOne({username})
        if(duplicateUsername){
            return NextResponse.json({message: "Username already exist"}, {status: 400})
        }
        
        // hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)
        // Create new user
        const newUser = new User({
            username,
            email,
            firstname,
            lastname,
            password: hashedPassword,
            resetkey
        })

        //Create token data
        const savedUser = await newUser.save();

        return NextResponse.json({
            message: "User created successfully", 
            status: 201, 
            success: true
        })

    } catch (error) {
        console.log("Error inside register api call ", error)
        return NextResponse.json({message: error.message}, {status: 500})
    }
} 