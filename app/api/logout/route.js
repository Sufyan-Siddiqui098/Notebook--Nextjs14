
import { NextRequest, NextResponse } from "next/server"

export const GET =async (req, res) => {
    try { 
        let response = await NextResponse.json({
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