import React, { useEffect } from "react";
import Temp from "./Temp";

const TempParent = ({ val }: { val: string }) => {
  useEffect(() => {
    console.log("Temp Parent Component loaded");

    return () => {
      console.log("Temp Parent Component unloaded");
    };
  });

  return (
    <>
      <div>TempParent</div>
      <Temp key={val} val={val} />
    </>
  );
};

export default TempParent;
