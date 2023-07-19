import React, { useState } from "react";
import ActionButtons from "../components/todo-page/action-buttons";
import TodoHeader from "../components/todo-page/todo-header/todo-header";
import TodoList from "../components/todo-page/todo-list/todo-list";

const TodoPage = () => {
  return (
    <div>
      <TodoHeader />
      <TodoList />
      <ActionButtons />
    </div>
  );
};

export default TodoPage;
