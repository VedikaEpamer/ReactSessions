import { useEffect, useState } from "react";

const useLogger = (value: any, label: string = "Label") => {
  useEffect(() => {
    console.log(`Label : ${label} - Value : ${value}`);
  }, [value, label]);
};

export default useLogger;

export const useLocalStorage = (value: any, label: string = "Label") => {
  const [state, setState] = useState<any>(localStorage.getItem(label));
  useEffect(() => {
    localStorage.setItem(label, value);
    setState(value);
  }, [value]);

  return [state, setState];
};
