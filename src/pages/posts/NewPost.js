import React from "react";
import { useNavigate } from "react-router-dom";
import PostForm from "./components/PostForm";
import client from "../../client";

function NewPost() {
  const url = "http://localhost:3004/posts";
  const navigate = useNavigate();
  const handlSubmit = async ({ title, body }) => {
    await client.post("/posts", { title, body });
    navigate(-1);
  };
  // const [postVal, SetpostVal] = useState({
  //   title: "",
  //   body: "",
  // });
  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");
  //
  // const addPost = async (e) => {
  //   e.preventDefault();
  //   await axios.post(url, { title: title, body: body });
  //   navigate("/posts");
  //   console.log(title, body);
  // };
  return (
    <div>
      <button onClick={() => navigate(-1)} className="ui button">
        Go back
      </button>
      <h1>New Post</h1>
      <PostForm onSubmit={handlSubmit} />
      {/*<form className="ui form" onSubmit={addPost}>*/}
      {/*  <div className="field">*/}
      {/*    <label>Title</label>*/}
      {/*    <input*/}
      {/*      type="text"*/}
      {/*      name="title"*/}
      {/*      onChange={(e) => setTitle(e.target.value)}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*  <div className="field">*/}
      {/*    <label>Body</label>*/}
      {/*    <input*/}
      {/*      type="text"*/}
      {/*      name="body"*/}
      {/*      onChange={(e) => setBody(e.target.value)}*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*  <div className="field">*/}
      {/*    <button className="ui button green">Add</button>*/}
      {/*  </div>*/}
      {/*</form>*/}
    </div>
  );
}

export default NewPost;
