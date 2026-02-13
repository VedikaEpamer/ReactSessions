import { Suspense, useState } from "react";
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
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Home from "./routes/Home";
import About from "./routes/About";
import { CustomNavbar } from "./routes/CustomNavbar";
import PageNotFound from "./routes/PageNotFound";
import College from "./routes/College";
import { Student } from "./routes/Student";
import Courses from "./routes/Courses";
import { CollegeNavBar } from "./routes/CollegeNavBar";
import UserList from "./routes/UserList";
import UserDetails from "./routes/UserDetails";
import Department from "./routes/Department";
import NavigateExample from "./routes/NavigateExample";

import { lazy } from "react";
import Spinner from "./routes/Spinner";
import PostList from "./apis/PostList";
import { EditPost } from "./apis/EditPost";

// const LazyLoadComponent = lazy(() => import("./routes/LazyLoadComponent"));

const LazyLoadComponent = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("./routes/LazyLoadComponent"));
      }, 5000);
    }),
);

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
      {/* <UseMemo /> */}

      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<NavigateExample />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/edit/:id" element={<EditPost />} />

        <Route
          path="/lazy"
          element={
            <Suspense fallback={<Spinner />}>
              <LazyLoadComponent />
            </Suspense>
          }
        />

        <Route path="/users" element={<UserList />} />
        <Route path="/users/:id/:name" element={<UserDetails />} />

        <Route path="/college" element={<College />}>
          <Route path="student" element={<Student />} />
          <Route path="department" element={<Department />} />
          {/* <Route index element={<Student />} /> */}
          <Route path="course" element={<Courses />} />
        </Route>

        <Route path="/*" element={<PageNotFound />} />

        {/* <Route path="/*" element={<Navigate to="/login" />} /> */}
      </Routes>
    </>
  );
}

export default App;
