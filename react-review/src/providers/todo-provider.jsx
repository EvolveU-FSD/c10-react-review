import React, { createContext, useContext, useState } from "react";
const TodoContext = createContext();
export const useTodos = () => useContext(TodoContext);
const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState();
  const contextValue = {
    todos,
    setTodos,
  };
  return (
    <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
  );
};

export default TodoProvider;
