import React from "react";
import Post from "./pages/posts/Post";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewPost from "./pages/posts/NewPost";
import EditPost from "./pages/posts/EditPost";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";

function App() {
  const token = localStorage.getItem("token");

  if (!token) {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route />
        </Routes>
      </BrowserRouter>
    );
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.replace("/login");
  };
  return (
    <BrowserRouter>
      <div className="ui container">
        <div className="ui menu">
          <div className="header item">Blog Admin</div>
        </div>
        <div className="right menu">
          <a className="ui item" onClick={handleLogout}>
            Logout
          </a>
        </div>
        <Routes>
          {/*<Route path="/" element={<Post />} />*/}
          {/*<Route path="/posts" element={<Post />} />*/}
          <Route path="/" element={<Post />} />
          <Route path="/posts">
            <Route index element={<Post />} />
            <Route path="create" element={<NewPost />} />
            <Route path=":id" element={<EditPost />} />
          </Route>

          {/*<Route path="/posts/create" element={<NewPost />} />*/}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
