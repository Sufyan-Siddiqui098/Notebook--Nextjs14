"use client";
import { fetchAllNotes } from "@/app/lib/api_calls.note";
import React, { useEffect, useState } from "react";
import UpdateNoteForm from "./UpdateNoteForm";
import { toast } from "react-toastify";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  
  const fetchNotesOnFrontend = async(message)=>{
    const reponse = await fetchAllNotes();
    setNotes(reponse.notes)
    if(message){
      toast.success(message);
    }
  }

  useEffect(() => {
    fetchNotesOnFrontend();
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
        <UpdateNoteForm updateNoteOnFrontend={fetchNotesOnFrontend} note={selectedNote} onClose={closeModal} />
      )}
    </div>
  );
};

export default Notes;
