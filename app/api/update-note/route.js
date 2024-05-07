import Note from "@/model/note.model";
import User from "@/model/user.model";
import { NextResponse } from "next/server";
import { decodeToken } from "@/app/lib/decodeUser";
import { connectToDatabase } from "@/app/lib/connectDatabase";

connectToDatabase();
export const POST = async (req, res) => {
  try {
    const { title, description, _id } = await req.json();
    const token = req.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ message: "Please Login " }, { status: 401 });
    }
    if (!title) {
      return NextResponse.json(
        { message: "Title Can't be emtpy " },
        { status: 400 }
      );
    }
    if (!description) {
      return NextResponse.json(
        { message: "Description Can't be emtpy " },
        { status: 400 }
      );
    }

    // JWT token decoed
    const decodedUser = decodeToken(token);

    // Verify the user presence in DB.
    const user = await User.findById(decodedUser._id);
    if (!user) {
      return NextResponse.json({ message: "Please login" }, { status: 401 });
    }
    
    const note = await Note.findByIdAndUpdate(_id, {title, description}, {new: true})


    return NextResponse.json({
      message: "Note Updated Successfully",
      success: true,
      note,
    });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
