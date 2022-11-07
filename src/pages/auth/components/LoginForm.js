import React, { useState } from "react";

function LoginForm({ onSubmit }) {
  const [login, Setlogin] = useState();
  const [password, Setpassword] = useState();
  const handSubmit = (e) => {
    e.preventDefault();
    onSubmit({ login, password });
  };
  return (
    <form
      className="ui form"
      style={{ width: 300, textAlign: "center" }}
      onSubmit={handSubmit}
    >
      <h4 className="ui dividing header">Login Form</h4>
      <div className="field">
        <label>Username</label>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={(e) => Setlogin(e.target.value)}
        />
      </div>
      <div className="field">
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => Setpassword(e.target.value)}
        />
      </div>
      <button className="ui button primary fluid" type="submit">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
