"use client";
import React, { useState } from "react";
import SubmitButton from "./SubmitButton";
import { updateNote } from "@/app/lib/utils";

const UpdateNoteForm = ({ note, onClose, updateNoteOnFrontend }) => {
  const [formData, setFormData] = useState({
    title: note.title || "", // Set default title if no note provided
    description: note.description || "", // Set default description if no note provided
    _id: note._id, // Include note ID for update
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    try{
      event.preventDefault();
      const response = await updateNote(formData);
      if(response.success){
        updateNoteOnFrontend(response.message);
      }
      onClose(); // Close the modal after submission (potentially after success)
    } catch(error){
      console.log("Error while updating \n", error);
    }
  };

  const cancel = (e) => {
    if (e.target.classList.contains("fixed")) onClose();
  };

  return (
    <div
      onClick={cancel}
      className={`fixed inset-0 z-50 bg-gray-900 bg-opacity-75 flex items-center justify-center transition duration-300 ease-in-out ${
        !note ? "hidden opacity-0" : "opacity-100"
      }`}
    >
      <div className="bg-[#121212]  rounded-lg p-4 max-w-[600px] sm:w-96 shadow-md">
        <h2 className="text-xl font-bold mb-4">Edit Note</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label tracking-wide">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
              className="form-control bg-inherit border pl-2 border-gray-500 text-gray-300 py-2 rounded w-full"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label tracking-wider">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              rows="3"
              value={formData.description}
              onChange={handleChange}
              className="form-control bg-inherit border border-gray-500 pl-2 text-gray-300 py-2 rounded w-full"
              required
            />
          </div>
          <SubmitButton text={"Update"} className={"py-1 text-sm mt-2"} />
        </form>
      </div>
    </div>
  );
};

export default UpdateNoteForm;
