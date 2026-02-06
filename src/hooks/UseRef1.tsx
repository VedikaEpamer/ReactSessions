import { useRef } from "react";

const UseRef1 = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const valueRef = useRef<string>("");

  const showValue = () => {
    if (inputRef.current) {
      valueRef.current = inputRef.current.value;
      alert(`Current value: ${valueRef.current}`);
    }
  };

  return (
    <div>
      <h2>Input useRef Example</h2>

      <input ref={inputRef} />
      <button onClick={showValue}>Show Current Value</button>

      <p>Stored Ref Value: {valueRef.current}</p>
    </div>
  );
};

export default UseRef1;
