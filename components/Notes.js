"use client";
import { fetchAllNotes } from "@/app/lib/utils";
import React, { useEffect, useState } from "react";
import UpdateNoteForm from "./UpdateNoteForm";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await fetchAllNotes();
      setNotes(response.notes);
    })();
  }, []);

  const openModal = (note) => setSelectedNote(note);
  const closeModal = () => setSelectedNote(null);
  if (notes.length < 1) return;
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 rounded bg-[#121212] min-h-56 h-auto mt-10 px-2 py-4 pb-6">
      <div className="w-full sm:pl-2 sm:col-span-2 md:col-span-3">
        <h2 className="text-xl md:font-bold font-semibold px-2 my-2 mb-4 tracking-widest">
          Notes
        </h2>
      </div>
      {/* card */}
      {notes.map((item) => (
        <div
          onClick={() => openModal(item)}
          key={item._id}
          className="er pb-3 bg-[#2c2c2c] px-2 transition rounded min-w-44 max-w-80"
        >
          <h2 className="font-semibold text-amber-400 my-2 tracking-wider ">
            {item.title}
          </h2>
          <div className="text-sm sm:text-base">{item.description}</div>
        </div>
      ))}

      {/* Modal */}
      {selectedNote && (
        <UpdateNoteForm note={selectedNote} onClose={closeModal} />
      )}
    </div>
  );
};

export default Notes;
