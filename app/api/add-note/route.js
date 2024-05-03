import Note from "@/model/note.model";
import User from "@/model/user.model";
import { NextResponse } from "next/server";
import { decodeToken } from "@/app/lib/decodeUser";
import { connectToDatabase } from "@/app/lib/connectDatabase";

connectToDatabase();
export const POST = async (req, res) => {
  try {
    const { title, description } = await req.json();
    const token = req.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ message: "Please Login " }, { status: 401 });
    }
    if (!title) {
      return NextResponse.json(
        { message: "Title is required " },
        { status: 400 }
      );
    }
    if (!description) {
      return NextResponse.json(
        { message: "Description is required " },
        { status: 400 }
      );
    }
    const { _id } = decodeToken(token);

    const user = await User.findById(_id);
    if (!user) {
      return NextResponse.json({ message: "Please login" }, { status: 401 });
    }

    const newNote = await Note({
      user: _id,
      title,
      description,
    });
    const savedNote = await newNote.save();

    return NextResponse.json({
      message: "Note added Successfully",
      success: true,
      savedNote,
    });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
