import React from "react";
import { useTodos } from "../../../providers/todo-provider";
import Button from "../../shared/button";

const TodoRow = ({ todo }) => {
  const todoContext = useTodos();
  const { setTodos } = todoContext;
  const deleteTodo = () => {
    setTodos((current) => {
      return current.filter((el) => el.id !== todo.id);
    });
  };
  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.title}</td>
      <td>{todo.completed ? "complete" : "incomplete"}</td>
      <td>
        <Button variant="outline" onClick={deleteTodo}>
          🗑️
        </Button>
      </td>
    </tr>
  );
};

export default TodoRow;
