"use client";
import { fetchAllNotes } from "@/app/lib/utils";
import React, { useEffect, useState } from "react";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
      (async () => {
          const response = await fetchAllNotes();
          console.log("response of all notes ", response);
          setNotes(response.notes);
        })();
        // console.log("re-rendering notes ")
  }, []);
  if(notes.length<1) return
  return (
    <div className="flex gap-3 justify-center rounded bg-[#121212] min-h-56 h-auto mt-10 flex-wrap px-2 py-4 pb-6">
      <div className="w-full sm:pl-2">
        <h2 className="text-xl md:font-bold font-semibold px-2 my-2 mb-4 tracking-widest">
          Notes
        </h2>
      </div>
      {/* card */}
      {notes.map((item) => (
        <div key={item._id} className="border pb-3 px-2 transition rounded max-w-80">
          <h2 className="font-semibold text-amber-400 my-2 tracking-wider ">{item.title}</h2>
          <div className="text-sm sm:text-base">{item.description}</div>
        </div>
      ))}

    </div>
  );
};

export default Notes;
