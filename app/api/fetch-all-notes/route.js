import { connectToDatabase } from "@/app/lib/connectDatabase";
import { decodeToken } from "@/app/lib/decodeUser";
import Note from "@/model/note.model";
import { NextResponse } from "next/server";

connectToDatabase();
export const GET = async (req, res) => {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) {
      return NextResponse.json({ message: "Please Login " }, { status: 401 });
    }
    const { _id } = decodeToken(token);
    const notes = await Note.find({ user: _id });

    return NextResponse.json({
      message: "Notes fetched ",
      notes,
      total: notes.length,
    });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
