import React from "react";

const WhyHooks = () => {
  let value: number = 1;

  const ChangeValue = () => {
    value = value + 1;
    console.log("Value:", value);
  };

  return (
    <>
      <div>WhyHooks</div>
      <div>Value:{value}</div>
      <button onClick={() => ChangeValue()}>Change Value</button>
    </>
  );
};

export default WhyHooks;
