import React from "react";
import LoginForm from "./components/LoginForm";
import client from "../../client";

function Login() {
  const handlelogin = async ({ login, password }) => {
    console.log({ login, password });
    try {
      const response = await client.post("/auth/login", {
        login,
        password,
      });
      console.log(response.data);
      localStorage.setItem("token", response.data.token);
      window.location.replace("/");
    } catch (e) {
      alert(e.response.data.message);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <LoginForm onSubmit={handlelogin} />
    </div>
  );
}

export default Login;
