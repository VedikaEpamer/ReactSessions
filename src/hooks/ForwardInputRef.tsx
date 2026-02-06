import React from "react";

type ForwardInputRefProps = {
  ref?: React.Ref<HTMLInputElement>;
};

const ForwardInputRef = ({ ref }: ForwardInputRefProps) => {
  return (
    <>
      <input type="text" ref={ref} />
    </>
  );
};

export default ForwardInputRef;
