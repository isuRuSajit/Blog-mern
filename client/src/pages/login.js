import React from "react";

function login() {
  return (
    <form className="login" onSubmit={login}>
      <h1>Login</h1>
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
      <button>Login</button>
    </form>
  );
}

export default login;
