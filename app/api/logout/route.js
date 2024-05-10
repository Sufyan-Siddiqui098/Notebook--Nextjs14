
import { connectToDatabase } from "@/app/lib/connectDatabase"
import { NextRequest, NextResponse } from "next/server"

connectToDatabase();
export const GET =async (req, res) => {
    try { 
        let response = NextResponse.json({
            message: "Logout Successfully",
            success: true
        })
        response.cookies.set('token','', {httpOnly: true, expires: new Date(0)})

        return response;

    } catch (error) {
        return NextResponse.json({
            error: error.message
        }, {status: 500})  
    }
} 