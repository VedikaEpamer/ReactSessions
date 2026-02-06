import React, { useState } from "react";
import useLogger, { useLocalStorage } from "./useLogger";

const UseCustomHook = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("John");

  useLogger(count, "Coming from : UseCustomHook");
  useLogger(name, "Coming from : UseCustomHook : Name");

  const [state, setState] = useLocalStorage(count, "count");

  return (
    <>
      <h3> Count:{count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
          setName("Bob");
        }}
      >
        Increement
      </button>
      <br />
      <button
        onClick={() => {
          setCount(count - 1);
          setName("John");
        }}
      >
        Deecrement
      </button>
      <br />
      {state}
    </>
  );
};

export default UseCustomHook;
