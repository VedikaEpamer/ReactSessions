import React from "react";

interface ChildProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const ChildItem = ({ value, setValue, setCount }: ChildProps) => {
  return (
    <div>
      Add todo :
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => setCount(100)}>Change</button>
    </div>
  );
};

export default ChildItem;
