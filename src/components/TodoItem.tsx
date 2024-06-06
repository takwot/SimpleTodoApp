import React from "react";
import { useAppDispatch } from "../core/hooks/useAppDispatch";
import { deleteTodo, toogleComplete } from "../core/store/slice/todoSlice";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const TodoItem: React.FC<Todo> = ({ id, completed, title }) => {
  const dispatch = useAppDispatch();

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onClick={() => dispatch(toogleComplete(id))}
      />
      <span style={{ textDecoration: completed ? "line-through" : "" }}>
        {title}
      </span>
      <span
        style={{ cursor: "pointer" }}
        onClick={() => dispatch(deleteTodo(id))}
      >
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
