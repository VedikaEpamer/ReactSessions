import React, { useEffect, useRef, useState } from "react";

export const UseRef = () => {
  const [val, setVal] = useState("");
  const inpRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<number>(0);

  useEffect(() => {
    console.log(valueRef);
  });

  return (
    <>
      <div ref={divRef}>This is div</div>
      <input
        type="text"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        ref={inpRef}
      />
      <button
        onClick={() => {
          inpRef.current?.focus();
          divRef.current!.style.backgroundColor = "cyan";
          valueRef.current = valueRef.current + 3;
        }}
      >
        Focus
      </button>
      {valueRef.current}
    </>
  );
};
