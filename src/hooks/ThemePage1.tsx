import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import ThemePage2 from "./ThemePage2";

const ThemePage1 = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "cyan" : "blue",
        color: theme === "light" ? "black" : "white",
      }}
    >
      ThemePage1
    </div>
  );
};

export default ThemePage1;
