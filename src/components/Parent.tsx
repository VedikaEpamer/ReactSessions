import React from "react";
import { functionExample } from "../services/functions";
import Child from "./Child";
import ChildArray from "./ChildArray";

export interface List {
  id: number;
  title: string;
  description: string;
}

export const Parent1 = () => {
  return <div>Parent1 Component</div>;
};

const Parent = () => {
  const name: string = "Vedika";
  const age: number = 22;
  const isStudent: boolean = true;

  const list: List = {
    id: 1,
    title: "Sample Title",
    description: "Sample Description",
  };

  const listArry: List[] = [
    {
      id: 1,
      title: "Title 1",
      description: "Description 1",
    },
    {
      id: 2,
      title: "Title 2",
      description: "Description 2",
    },
  ];

  const functionExample1 = (num: number) => {
    console.log("Function Example");
    console.log(num);
    console.log(`Name is ${name}`);
  };

  return (
    <>
      <div>Parent</div>
      <Child name={name} age={age} />
      <Child name={name} age={age} isStudent={false} />

      <ChildArray list={listArry} func={functionExample1} />
    </>
  );
};

export default Parent;
