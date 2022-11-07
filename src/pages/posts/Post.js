import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "../../client";

function Post() {
  const [posts, Setposts] = useState([]);
  const getPosts = async () => {
    const apiPosts = await client.get("/posts");
    Setposts(apiPosts.data);
  };
  useEffect(() => {
    getPosts();
  }, []);

  const handlDelete = async (id) => {
    if (window.confirm("Are you sure to delete this post?")) {
      await client.delete(`/posts/${id}`);
      getPosts();
    }
  };

  return (
    <div>
      <Link to="/posts/create" className="ui  green button">
        Add post
      </Link>
      <table className="ui celled table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => {
            return (
              <tr key={post._id}>
                <td>{post.title}</td>
                <td>{post.body}</td>

                <td>
                  <Link to={`/posts/${post._id}`}>
                    <button className="ui  blue button">Edit</button>
                  </Link>

                  <button
                    onClick={() => handlDelete(post._id)}
                    className="ui  red button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Post;
