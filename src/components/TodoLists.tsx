"use client";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";

interface Props {
  item: { id: number; text: string };
  onDelete: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}

const TodoLists = ({ item, onDelete, onEdit }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(item.text);
  const handleDelete = () => {
    onDelete(item.id);
  };
  const handleEdit = () => {
    setIsEditing(!isEditing);
  };
  const handleSave = () => {
    onEdit(item.id, editedText);
    setIsEditing(false);
  };
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="my-2 bg-slate-950 text-slate-200 px-4 py-2 rounded-md flex items-center justify-between"
    >
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onBlur={handleSave}
          autoFocus
          className="border w-full h-8 rounded-md outline-none px-4 focus-visible:border-green-600 text-base font-medium placeholder:font-normal text-slate-900"
        />
      ) : (
        <p>{item.text}</p>
      )}

      <div className="text-lg flex items-center gap-x-3 text-slate-300">
        {isEditing ? (
          <div
            onClick={handleSave}
            className="hover:text-green-600 cursor-pointer duration-200 ml-2"
          >
            &#10004;
          </div>
        ) : (
          <>
            <FaEdit
              onClick={handleEdit}
              className="hover:text-green-600 cursor-pointer duration-200"
            />
            <FaTrash
              onClick={handleDelete}
              className="hover:text-red-600 cursor-pointer duration-200"
            />
          </>
        )}
      </div>
    </motion.div>
  );
};

export default TodoLists;
