import React from "react";
import { Outlet } from "react-router-dom";

const DashboardPage = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>Todos</li>
          <li>Login</li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default DashboardPage;
