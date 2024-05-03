"use client";
import React, { useState } from "react";
import SubmitButton from "./SubmitButton";

const AddNoteForm = () => {
  const [note, setNote] = useState({
    title: "",
    description: "",
  });
  return (
    <form className=" text-white resize-y gap-1 p-2 flex flex-col rounded h-auto shadow-sm bg-[#121212] w-[270px] max-w-[600px]  [&>*]:bordernone [&>*]:placeholder:font-medium [&>*]:outline-none [&>*]:bg-inherit  sm:w-[500px] sm:py-4 sm:px-3">
      <input
        value={note.title}
        onChange={(e) => setNote({ ...note, title: e.target.value })}
        type="text"
        className="px-1 py-2 text-xl"
        placeholder="Title"
      />
      <textarea
        onChange={(e) => setNote({ ...note, description: e.target.value })}
        value={note.description}
        name=""
        id=""
        className="px-1 py-2 min-h-32 w-full h-max order resize-noe overflow-hidden text-lg"
        placeholder="Take a note..."
      />
      <SubmitButton
        text={"Add"}
        className={
          "!bg-[#468a37] rounded sm:w-max !px-4 !py-1 border border-transparent !text-white  hover:!bg-[#366b2a]"
        }
      />
    </form>
  );
};

export default AddNoteForm;
