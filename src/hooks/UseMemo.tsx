import { useMemo, useState } from "react";
import { initialItems } from "./UseMemoList";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  console.log("rendered");

  // const selectedItems = items.find((item) => item.isSelected);

  const selectedItems = useMemo(
    () => items.find((item) => item.isSelected),
    [items],
  );

  return (
    <>
      <div>UseMemo</div>
      <h1>Count : {count}</h1>
      <h2>SelectedItem : {selectedItems?.id}</h2>
      <button onClick={() => setCount(count + 1)}>Increement</button>
    </>
  );
};

export default UseMemo;
