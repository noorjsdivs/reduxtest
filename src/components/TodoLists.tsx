"use client";
import { FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";

interface Props {
  item: { id: number; text: string };
  onDelete: (id: number) => void;
}

const TodoLists = ({ item, onDelete }: Props) => {
  const handleDelete = () => {
    onDelete(item.id);
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="my-2 bg-slate-950 text-slate-200 px-4 py-2 rounded-md flex items-center justify-between"
    >
      <p>{item.text}</p>

      <div className="text-lg flex items-center gap-x-3 text-slate-300">
        <FaTrash
          onClick={handleDelete}
          className="hover:text-red-600 cursor-pointer duration-200"
        />
      </div>
    </motion.div>
  );
};

export default TodoLists;
