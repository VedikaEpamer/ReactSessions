import React, { useRef } from "react";
import ForwardInputRef from "./ForwardInputRef";

const UseForwardRef = () => {
  const forwardRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <div>UseForwardRef</div>

      <ForwardInputRef ref={forwardRef} />
      <button
        onClick={() => {
          forwardRef.current?.focus();
          forwardRef.current!.style.backgroundColor = "yellow";
        }}
      >
        Focus
      </button>
    </>
  );
};

export default UseForwardRef;
