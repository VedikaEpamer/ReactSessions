import React, { useState } from "react";
import ListItem from "./ListItem";
import ChildItem from "./ChildItem";

interface List {
  title: string;
  completed: boolean;
}

const ToDoList = () => {
  const toDos: List[] = [
    {
      title: "Learn Typescript",
      completed: true,
    },
    {
      title: "Learn React",
      completed: false,
    },
    {
      title: "Write Test Cases React",
      completed: false,
    },
  ];

  const [value, setValue] = useState<string>("");

  const [num, setNumber] = useState<number>(0);

  const [list, setList] = useState<List[]>(toDos);

  const addTodo = () => {
    setList((prevState) => [...prevState, { title: value, completed: false }]);
    setValue("");
  };

  const toggle = (index: number) => {
    const updateList = list.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item,
    );

    setList(updateList);
  };

  const removeTodo = (index: number) => {
    const updateList = list.filter((item, i) => i !== index);

    setList(updateList);
  };
  return (
    <>
      <div>ToDoList</div>
      <ChildItem value={value} setValue={setValue} setCount={setNumber} />
      {num}
      <br />
      <button onClick={() => addTodo()}>Add Todo</button>
      {list.map((item, index) => (
        <div key={index}>
          <ListItem
            index={index}
            title={item.title}
            completed={item.completed}
            toggle={toggle}
            removeTodo={removeTodo}
          />
        </div>
      ))}
    </>
  );
};

export default ToDoList;
