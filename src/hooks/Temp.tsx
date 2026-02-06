import React, { useEffect } from "react";

const Temp = ({ val }: { val: string }) => {
  useEffect(() => {
    console.log("Temp Component loaded");

    return () => {
      console.log("Temp Component unloaded");
    };
  });

  return <div>Temp</div>;
};

export default Temp;
