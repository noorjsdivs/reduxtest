"use client";
import { FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, resetTodo } from "@/redux/TodoSlice";

interface Todos {
  id: number;
  text: string;
}

const TodoLists = () => {
  const todoList = useSelector((state: any) => state.todo.todoList);
  const dispatch = useDispatch();

  return (
    <>
      {todoList.length > 0 && (
        <div className="mt-10">
          {todoList.map((item: Todos) => (
            <motion.div
              key={item.id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="my-2 bg-slate-950 text-slate-200 px-4 py-2 rounded-md flex items-center justify-between"
            >
              <p>{item.text}</p>

              <div className="text-lg flex items-center gap-x-3 text-slate-300">
                <FaTrash
                  onClick={() => dispatch(deleteTodo(item.id))}
                  className="hover:text-red-600 cursor-pointer duration-200"
                />
              </div>
            </motion.div>
          ))}
        </div>
      )}
      {todoList.length > 1 && (
        <div className="w-full flex items-center justify-end mt-4">
          <button
            onClick={() => dispatch(resetTodo())}
            className="bg-slate-950 text-xs uppercase px-5 py-2 font-medium rounded-md text-slate-200 hover:text-red-600 duration-200"
          >
            Remove all
          </button>
        </div>
      )}
    </>
  );
};

export default TodoLists;
