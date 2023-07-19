import React, { useEffect, useRef } from "react";
import { useTodos } from "../../../providers/todo-provider";
import TodoRow from "./todo-row";

const TodoList = () => {
  const idRef = useRef();
  const todoContext = useTodos();
  const { todos, setTodos } = todoContext;
  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      const data = await response.json();
      setTodos(data);
    };
    getTodos();

    if (idRef.current) {
      idRef.current.addEventListener("mousemove", () =>
        console.log("hovered!")
      );
    }
  }, [idRef]);
  console.log(todos);
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th ref={idRef}>Id</th>
            <th>Title</th>
            <th>Completed</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos &&
            todos.map((todo) => {
              return <TodoRow key={todo.id} todo={todo} />;
            })}
        </tbody>
      </table>
    </section>
  );
};

export default TodoList;
