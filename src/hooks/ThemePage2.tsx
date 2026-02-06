import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemePage2 = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default ThemePage2;
