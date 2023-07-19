import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateTodoPage from "./pages/create-todo-page";
import DashboardPage from "./pages/dashboard-page";
import Other from "./pages/other";
import TodoPage from "./pages/todo-page";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<TodoPage />} />
      <Route path="/dashboard" element={<DashboardPage />}>
        <Route path="/dashboard/create" element={<CreateTodoPage />} />
        <Route path="/dashboard/other" element={<Other />} />
      </Route>
    </Routes>
  );
};

export default Routing;
