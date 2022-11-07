import React, { useState } from "react";

function PostForm({ onSubmit, initialVal }) {
  const [title, setTitle] = useState(initialVal?.title);
  const [body, setBody] = useState(initialVal?.body);

  return (
    <div>
      <form
        className="ui form"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit({ title, body });
        }}
      >
        <div className="field">
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Body</label>
          <textarea
            name="body"
            placeholder="Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div className="field">
          <button type="submit" className="ui button green">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default PostForm;
