import React, { useEffect } from "react";

const Temp = ({ val }: { val: string }) => {
  useEffect(() => {
    console.log("Component loaded");

    return () => {
      console.log("Component unloaded");
    };
  });

  return <div>Temp</div>;
};

export default Temp;
