import React, { useState } from "react";

interface Student {
  id: number;
  name: string;
  subjects: string[];
}

const UseStateHooks = () => {
  const initValue: number = 100;

  const [toggle, setToggle] = useState<boolean>(false);
  const [value, setValue] = useState<number>(initValue); //usestate hook
  const [name, setName] = useState<string>("John"); //usestate hook

  const [student, setStudent] = useState<Student>({
    id: 1,
    name: "John",
    subjects: ["Math", "Science"],
  });

  const [arr, setArray] = useState<number[]>([1, 2, 3, 4]);

  const ChangeValue = () => {
    // setValue((prevState) => prevState + 1);

    setValue((prevState) => prevState + 1);
    setValue((prevState) => prevState + 1);
    setValue((prevState) => prevState + 1);

    console.log("Value:", value);
  };

  const removeElement = (num: number) => {
    setArray((prevArray) => prevArray.filter((n) => n != num));
  };

  return (
    <>
      <div>UseStateHooks</div>
      <div>Value:{value}</div>
      <button onClick={() => ChangeValue()}>Change Value</button>
      <br />
      <div>
        Toggle :{toggle ? "On" : "Off"}
        <br />
        <button onClick={() => setToggle((prevState) => !prevState)}>
          Toggle
        </button>
      </div>
      <br />
      <div>
        Name: {student.name}
        <br />
        Subjects: {student.subjects.join(", ")}
        <br />
        <button
          onClick={() =>
            setStudent({
              ...student,
              name: "Bob",
              subjects: [...student.subjects, "Geography"],
            })
          }
        >
          Change Name to Bob
        </button>
      </div>
      <div>Array:{arr.join(",")}</div>
      <button onClick={() => removeElement(2)}>Remove 2</button>
      <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <br />
      Latest Name: {name}
    </>
  );
};

export default UseStateHooks;
