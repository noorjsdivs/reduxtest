"use client";
import React from "react";
import Container from "./Container";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, resetTodo } from "@/redux/TodoSlice";
import { motion } from "framer-motion";
import { FaTrash } from "react-icons/fa";
import Link from "next/link";

interface Todos {
  id: number;
  text: string;
}

const AllTodos = () => {
  const todoList = useSelector((state: any) => state.todo.todoList);
  const dispatch = useDispatch();
  return (
    <>
      {todoList.length > 0 ? (
        <Container className="py-10">
          <div className="max-w-2xl mx-auto bg-white text-slate-950 py-10 px-6 rounded-md shadow-lg shadow-slate-400">
            <p className="text-xl font-semibold mb-5">Alltodos</p>
            {todoList.length > 0 && (
              <div>
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
          </div>
        </Container>
      ) : (
        <div className="flex flex-col items-center py-10 gap-y-2">
          <p className="text-center text-lg font-medium">No todos available</p>
          <Link href={"/"}>Add todo</Link>
        </div>
      )}
    </>
  );
};

export default AllTodos;
