import { useReducer, useState } from "react";

interface List {
  title: string;
  completed: boolean;
}

const UseReducer = () => {
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

  //   const [list, setList] = useState<List[]>(toDos);

  const reducer = (
    state: string[],
    action: { type: string; payload?: string },
  ): string[] => {
    switch (action.type) {
      case "Add":
        return [...state, action.payload ? action.payload : ""];
      case "Remove":
        const updateList = state.filter((item) => item !== action.payload);
        return updateList;
      case "Clear":
        return [];
    }
    return state;
  };

  const [list, disptachList] = useReducer(reducer, []);

  //   const addTodo = () => {
  //     setList((prevState) => [...prevState, { title: value, completed: false }]);
  //     setValue("");
  //   };

  //   const removeTodo = (index: number) => {
  //     const updateList = list.filter((item, i) => i !== index);

  //     setList(updateList);
  //   };

  return (
    <>
      <div>UseReducer</div>
      Add todo :
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <br />
      <button onClick={() => disptachList({ type: "Add", payload: value })}>
        Add Todo
      </button>
      <button onClick={() => disptachList({ type: "Clear" })}>Clear</button>
      {list.map((item, index) => (
        <div key={index}>
          <h3>{item}</h3>

          <br />
          <button
            onClick={() => disptachList({ type: "Remove", payload: item })}
          >
            Remove Todo
          </button>
        </div>
      ))}
    </>
  );
};

export default UseReducer;
