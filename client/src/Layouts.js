import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
function Layouts() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}

export default Layouts;
