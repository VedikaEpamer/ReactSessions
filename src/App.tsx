import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Parent, { Parent1 } from "./components/Parent";
import Layout from "./components/Layout";
import Header from "./components/Header";
import WhyHooks from "./components/WhyHooks";
import UseStateHooks from "./hooks/UseStateHooks";
import ToDoList from "./hooks/ToDoList";
import UseReducerHook from "./hooks/UseReducerHook";
import UseReducerHook1 from "./hooks/UseReducerHook1";
import UseEffect from "./hooks/UseEffect";
import { UseLayout } from "./hooks/UseLayout";
import { UseRef } from "./hooks/UseRef";

function App() {
  return (
    <>
      {/* <WhyHooks /> */}
      {/* <UseStateHooks /> */}
      {/* <ToDoList /> */}
      {/* <UseReducerHook /> */}
      {/* <UseReducerHook1 /> */}
      <UseEffect />
      {/* <UseLayout /> */}
      {/* <UseRef /> */}
    </>
  );
}

export default App;
