import React from "react";

const ListItem = ({
  title,
  completed,
  index,
  removeTodo,
}: {
  title: string;
  completed: boolean;
  index: number;
  removeTodo: (num: number) => void;
  toggle: (num: number) => void;
}) => {
  return (
    <div>
      <h3>{title}</h3>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggle(index)}
      />
      {completed ? "Completed" : "Pending"}
      <br />
      <button onClick={() => removeTodo(index)}>Remove Todo</button>
    </div>
  );
};

export default ListItem;
