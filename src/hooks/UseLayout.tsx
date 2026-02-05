import React, { useEffect, useLayoutEffect, useState } from "react";

export const UseLayout = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const handleResize = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useLayoutEffect(() => {
    console.log("Layout Effect called always");
  });
  useLayoutEffect(() => {
    console.log("Layout Effect called only once");
  }, []);

  useEffect(() => {
    console.log("Use Effect called always");
  });
  useEffect(() => {
    console.log("Use Effect called only once");
  }, []);

  return (
    <>
      {" "}
      <div>UseLayout</div>
      Width : {size.width}
      Height : {size.height}
    </>
  );
};
