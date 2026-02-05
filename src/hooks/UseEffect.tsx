import React, { useEffect, useState } from "react";
import Temp from "./Temp";

const UseEffect = () => {
  const [val, setVal] = useState("");
  const [toggle, setToggle] = useState<boolean>(true);

  useEffect(() => {
    console.log("Parent component loaded");
    return () => {
      console.log("Parent component unloaded");
    };
  }, []);

  useEffect(() => {
    console.log("Value1 changed:", val);
  }, [val]);

  return (
    <>
      <div>UseEffect</div>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={() => setToggle((prev) => !prev)}>Toggle Temp</button>

      {/* Use key to force unmount/remount when val changes */}
      {toggle && <Temp key={val} val={val} />}
    </>
  );
};

export default UseEffect;
