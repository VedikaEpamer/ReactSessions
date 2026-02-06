import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import ThemePage1 from "./ThemePage1";
import ThemePage2 from "./ThemePage2";

const Theme = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <ThemePage1 />
        <ThemePage2 />
      </ThemeContext.Provider>
    </>
  );
};

export default Theme;
