import React from "react";
import type { List } from "./Parent";

// interface ChildArrayProps {
//   list: List[];
// }

const ChildArray = ({
  list,
  func,
}: {
  list: List[];
  func: (number: number) => void;
}) => {
  return (
    <>
      <div>ChildArray</div>

      <ol>
        {list.map((item, index) => (
          <li key={index}>
            {item.title} {item.description}
          </li>
        ))}
      </ol>

      <button onClick={() => func(10)}>Call Function</button>
    </>
  );
};

export default ChildArray;
