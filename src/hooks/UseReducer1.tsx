import React, { useReducer, useState } from "react";

interface Calc {
  result: number;
  operator: string;
}

const ActionType = {
  Add: "Add",
  Subtract: "Subtract",
  Divide: "Divide",
  Multiply: "Multiply",
  Clear: "Clear",
};

const UseReducer1 = () => {
  const reducer = (state: Calc, action: { type: string }): Calc => {
    switch (action.type) {
      case ActionType.Add:
        return { operator: "+", result: num1 + num2 };
      case ActionType.Subtract:
        return { operator: "-", result: num1 - num2 };
      case ActionType.Multiply:
        return { operator: "*", result: num1 * num2 };
      case ActionType.Divide:
        return { operator: "/", result: num1 / num2 };
      case ActionType.Clear:
        return { operator: "", result: 0 };
    }

    return state;
  };

  const [num1, setNumber1] = useState<number>(0);
  const [num2, setNumber2] = useState<number>(0);

  const [calc, dispatchCalc] = useReducer(reducer, {
    result: 0,
    operator: "",
  });

  return (
    <>
      <div>UseReducer1</div>
      Number 1:
      <input
        type="text"
        value={num1}
        onChange={(e) => setNumber1(Number(e.target.value))}
      />
      <br />
      Number 2:
      <input
        type="text"
        value={num2}
        onChange={(e) => setNumber2(Number(e.target.value))}
      />
      <br />
      <button onClick={(e) => dispatchCalc({ type: ActionType.Add })}>
        {ActionType.Add}
      </button>
      <button onClick={(e) => dispatchCalc({ type: ActionType.Subtract })}>
        {ActionType.Subtract}
      </button>
      <button onClick={(e) => dispatchCalc({ type: ActionType.Multiply })}>
        {ActionType.Multiply}
      </button>
      <button onClick={(e) => dispatchCalc({ type: ActionType.Divide })}>
        {ActionType.Divide}
      </button>
      <button onClick={(e) => dispatchCalc({ type: ActionType.Clear })}>
        {ActionType.Clear}
      </button>
      <div>
        {num1} {calc.operator} {num2} = {calc.result}
      </div>
    </>
  );
};

export default UseReducer1;
