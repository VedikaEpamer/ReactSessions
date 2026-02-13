import React, { useEffect, useState } from "react";
import { deletePost, getPosts } from "./postService";
import type { Post } from "./models";
import AddPost from "./AddPost";
import { useNavigate } from "react-router";

const PostList = () => {
  console.log(import.meta.env.VITE_MY_APPLICATION_NAME);

  const [post, setPost] = useState<Post[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPosts()
      .then((response) => {
        console.log(response);
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
        console.error(error?.message);
      });
  }, []);

  const handleDeletePost = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string,
  ) => {
    e.preventDefault();
    deletePost(id).then((response) => {
      console.log(response);
      setPost((prevState) => prevState.filter((item) => item.id !== id));
    });
  };

  return (
    <div>
      <AddPost setPost={setPost} />
      <h2>PostList</h2>
      {post.map((item, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "azure",
            border: "1px solid",
            borderRadius: "5px",
            margin: "5px",
            padding: "2px",
          }}
        >
          Title: <h3>{item.title}</h3>
          Views: <p>{item.views}</p>
          <button onClick={(e) => navigate(`/posts/edit/${item.id}`)}>
            Edit
          </button>
          <button onClick={(e) => handleDeletePost(e, item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PostList;
