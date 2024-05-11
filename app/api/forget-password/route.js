import { connectToDatabase } from "@/app/lib/connectDatabase";
import User from "@/model/user.model";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";


connectToDatabase();
export const POST = async (req, res) => {
  try {
    const { email, newPassword, securityKey } = await req.json();
    if (!email) {
      return NextResponse.json(
        { message: "Email is Required" },
        { status: 400 }
      );
    }
    if (!newPassword) {
      return NextResponse.json(
        { message: "New Password is Required" },
        { status: 400 }
      );
    }
    if (!securityKey) {
      return NextResponse.json(
        { message: "Forget Password Key is Required" },
        { status: 400 }
      );
    }
    // Check if user exist
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "User doesn't found" },
        { status: 400 }
      );
    }
    if (user.resetkey !== securityKey) {
      return NextResponse.json(
        { message: "Invalid Forget Key" },
        { status: 400 }
      );
    }

    // // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // //Create token data
    const savedUser = await User.findByIdAndUpdate(user._id, {
      password: hashedPassword,
    });

    return NextResponse.json({
      message: "Password successfully",
      status: 200,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
