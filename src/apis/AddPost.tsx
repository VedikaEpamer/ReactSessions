import React, { useState } from "react";
import { addPost } from "./postService";
import type { Post } from "./models";

const AddPost = ({
  setPost,
}: {
  setPost: React.Dispatch<React.SetStateAction<Post[]>>;
}) => {
  const [title, setTitle] = useState("");
  const [views, setViews] = useState(0);

  const handleAddPost = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addPost({ title, views }).then((response) => {
      console.log(response);
      setPost((prevState) => [...prevState, response.data]);
    });
  };

  return (
    <div>
      <div>
        Title:
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        Views:
        <input
          type="number"
          placeholder="Views"
          value={views}
          onChange={(e) => setViews(Number(e.target.value))}
        />
        <button onClick={(e) => handleAddPost(e)}>Add Post</button>
      </div>
    </div>
  );
};

export default AddPost;
