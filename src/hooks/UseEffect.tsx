import React, { useEffect, useState } from "react";
import Temp from "./Temp";
import TempParent from "./TempParent";

const UseEffect = () => {
  const [val, setVal] = useState("");
  const [toggle, setToggle] = useState<boolean>(true);

  //   useEffect(() => {
  //     console.log("always Parent component loaded");
  //   });

  //   useEffect(() => {
  //     console.log("Parent component loaded");
  //     return () => {
  //       console.log("Parent component unloaded");
  //     };
  //   }, []);

  useEffect(() => {
    console.log("Value1 changed:", val);
  }, [val]);

  return (
    <>
      <div>UseEffect</div>
      <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
      <button onClick={() => setToggle((prev) => !prev)}>Toggle Temp</button>

      {toggle && <TempParent val={val} />}
      {/* {toggle && <TempParent key={val} val={val} />} */}
    </>
  );
};

export default UseEffect;
