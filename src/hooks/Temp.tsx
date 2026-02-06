import React, { useEffect } from "react";

const Temp = ({ val }: { val: string }) => {
  useEffect(() => {
    console.log("Temp Child Component loaded");

    return () => {
      console.log("Temp child Component unloaded");
    };
  });

  return <div>Temp</div>;
};

export default Temp;
