import { createSlice } from "@reduxjs/toolkit";

interface Todo {
  id: number;
  text: string;
}

interface TodoState {
  todoList: Todo[];
}

const initialState: TodoState = {
  todoList: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const existingTodo = state.todoList.find(
        (item) => item.id === action.payload.id
      );
      if (existingTodo) {
        state.todoList = action.payload;
      } else {
        state.todoList.push(action.payload);
      }
    },
    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (item) => item.id !== action.payload
      );
    },
    resetTodo: (state) => {
      state.todoList = [];
    },
  },
});

export const { addTodo, deleteTodo, resetTodo } = todoSlice.actions;
export default todoSlice.reducer;
