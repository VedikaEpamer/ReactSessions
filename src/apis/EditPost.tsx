import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { editPost, getPostById } from "./postService";

export const EditPost = () => {
  const [title, setTitle] = useState("");
  const [views, setViews] = useState(0);

  const params = useParams();
  const id: string = params.id as string;
  //   console.log(params.id);

  useEffect(() => {
    getPostById(id).then((response) => {
      console.log(response);
      setTitle(response.data.title);
      setViews(response.data.views);
    });
  }, []);

  const handleEditPost = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    editPost(id, { title, views }).then((response) => {
      alert("Post edited successfully");
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
        <button onClick={(e) => handleEditPost(e)}>Edit Post</button>
      </div>
      <Link to="/posts">Back to Post List</Link>
    </div>
  );
};
