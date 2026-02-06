import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Parent, { Parent1 } from "./components/Parent";
import Layout from "./components/Layout";
import Header from "./components/Header";
import WhyHooks from "./components/WhyHooks";
import UseStates from "./hooks/UseState";
import ToDoList from "./hooks/ToDoList";
import UseReducer from "./hooks/UseReducer";
import UseReducer1 from "./hooks/UseReducer1";
import UseEffect from "./hooks/UseEffect";
import { UseLayout } from "./hooks/UseLayout";
import { UseRef } from "./hooks/UseRef";
import BlobLayout from "./assignments/Day1/BlobLayout";
import { blogs } from "./assignments/Day1/blog";
import BlogPost from "./assignments/Day1/BlogPost";
import TodoMain from "./assignments/Day2/TodoMain";
import UseRef1 from "./hooks/UseRef1";
import UseForwardRef from "./hooks/UseForwardRef";
import Theme from "./hooks/Theme";
import UseCustomHook from "./hooks/UseCustomHook";
import UseMemo from "./hooks/UseMemo";

function App() {
  return (
    <>
      {/* Assignments */}
      {/* <BlobLayout title="Simple Blog App">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <BlogPost
              key={blog.id}
              title={blog.title}
              content={blog.content}
              isPublished={blog.isPublished}
            />
          ))
        ) : (
          <p>No blog posts available.</p>
        )}
      </BlobLayout> */}
      {/* <TodoMain /> */}
      {/* Assignments */}

      {/* <WhyHooks /> */}
      {/* <UseStates /> */}
      {/* <ToDoList /> */}
      {/* <UseReducer /> */}
      {/* <UseReducer1 /> */}
      {/* <UseEffect /> */}
      {/* <UseLayout /> */}
      {/* <UseRef /> */}
      {/* <UseRef1 /> */}
      {/* <UseEffect /> */}
      {/* <UseForwardRef /> */}

      {/* <Theme /> */}
      {/* <UseCustomHook /> */}
      <UseMemo />
    </>
  );
}

export default App;
