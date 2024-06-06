import React, { useState } from "react";
import { useAppDispatch } from "../core/hooks/useAppDispatch";
import { addTodo } from "../core/store/slice/todoSlice";

const TodoForm: React.FC = () => {
  const [text, setText] = useState<string>("");
  const dispatch = useAppDispatch();

  return (
    <label>
      <input
        placeholder="New Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          if (text.trim().length) {
            dispatch(addTodo(text));
            setText("");
          }
        }}
      >
        Add
      </button>
    </label>
  );
};

export default TodoForm;
