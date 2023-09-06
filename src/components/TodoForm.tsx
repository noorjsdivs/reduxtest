"use client";
import { useState } from "react";
import Container from "./Container";
import { IoClose } from "react-icons/io5";
import toast, { Toaster } from "react-hot-toast";
import TodoLists from "./TodoLists";
import { useDispatch } from "react-redux";
import { addTodo } from "@/redux/TodoSlice";

const TodoForm = () => {
  const dispatch = useDispatch();
  const [todoinput, setTodoinput] = useState("");
  const [todoArray, setTodoArray] = useState<{ id: number; text: string }[]>(
    []
  );

  const saveTodo = () => {
    if (todoinput === "") {
      toast.error("Please enter your todo!");
    } else {
      const newTodo = {
        id: Math.random(),
        text: todoinput,
      };
      dispatch(addTodo({ id: Math.random(), text: todoinput }));
      setTodoArray([...todoArray, newTodo]);
      toast.success("Todo added successfully");
      setTodoinput("");
    }
  };

  const handleDeleteTodo = (idToDelete: number) => {
    const updatedTodos = todoArray.filter((item) => item.id !== idToDelete);
    setTodoArray(updatedTodos);
    toast.success("Todo deleted successfully");
  };

  return (
    <Container className="py-10">
      <div className="max-w-2xl mx-auto bg-white text-slate-950 py-10 px-6 rounded-md shadow-lg shadow-slate-400">
        <div className="w-full flex items-center gap-x-3 h-10">
          <div className="h-full w-full border-slate-400 relative">
            <input
              className="border  w-full h-full rounded-md outline-none px-4 focus-visible:border-green-600 text-base font-medium placeholder:font-normal"
              type="text"
              placeholder="enter your todo here"
              onChange={(e) => setTodoinput(e.target.value)}
              value={todoinput}
            />
            {todoinput.length > 0 && (
              <span
                onClick={() => setTodoinput("")}
                className="absolute right-2 top-3 text-lg text-red-600 hover:text-red-700 duration-200 cursor-pointer"
              >
                <IoClose />
              </span>
            )}
          </div>
          <button
            onClick={saveTodo}
            className="bg-slate-800 text-slate-200 px-7 h-full rounded-md hover:bg-black hover:text-white duration-200"
          >
            Add
          </button>
        </div>
        <TodoLists />
      </div>
      <Toaster />
    </Container>
  );
};

export default TodoForm;
