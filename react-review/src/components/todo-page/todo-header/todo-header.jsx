import React, { useEffect, useState } from "react";
import { useTodos } from "../../../providers/todo-provider";

const TodoHeader = () => {
  const [todoCount, setTodoCount] = useState(0);
  const todoContext = useTodos();
  // const todos = todoContext.todos
  const { todos } = todoContext;
  useEffect(() => {
    if (todos) {
      setTodoCount(todos.length);
    }
  }, [todos]);

  return (
    <header className="todo-header">
      <h1>My Todos ({todoCount})</h1>
    </header>
  );
};

export default TodoHeader;
