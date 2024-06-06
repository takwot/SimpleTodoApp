import React from "react";
import { useAppSelector } from "../core/hooks/useAppSelector";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const todos = useAppSelector((state) => state.todo.todos);

  return (
    <ul>
      {todos.map((el, index) => (
        <TodoItem
          key={index}
          completed={el.completed}
          id={index}
          title={el.title}
        />
      ))}
    </ul>
  );
};

export default TodoList;
