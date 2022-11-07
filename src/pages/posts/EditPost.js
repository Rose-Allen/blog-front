import React, { useEffect, useState } from "react";
import PostForm from "./components/PostForm";
import { useNavigate, useParams } from "react-router-dom";
import client from "../../client";

function EditPost() {
  const navigate = useNavigate();
  const params = useParams();
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    client.get(`/posts/${params.id}`).then((res) => {
      setPost(res.data);
      setLoading(false);
    });
  }, [params.id]);
  const handlSubmit = async ({ title, body }) => {
    await client
      .patch(`/posts/${params.id}`, { title, body })
      .then(navigate(-1));
  };

  // console.log(post);
  if (loading) {
    return <div className="ui text active loader">Loading</div>;
  }

  return (
    <div>
      <button onClick={() => navigate(-1)} className="ui button">
        Go back
      </button>
      <h1>Edit Post</h1>
      <PostForm initialVal={post} onSubmit={handlSubmit} />
    </div>
  );
}

export default EditPost;
