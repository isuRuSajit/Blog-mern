import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/" className="logo">
        MY BLOG
      </Link>
      <nav>
        <Link to="/login">LOGIN</Link>
        <Link to="/register">REGISTER</Link>
      </nav>
    </header>
  );
}

export default Header;
