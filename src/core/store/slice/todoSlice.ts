import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoSlice } from "../../types/todo.slice";

const initialState: TodoSlice = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.todos.push({
        title: action.payload,
        completed: false,
      });
    },
    toogleComplete(state, action: PayloadAction<number>) {
      const todo = state.todos.find((_, index) => index === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter((_, index) => index !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo, toogleComplete } = todoSlice.actions;
export default todoSlice.reducer;
