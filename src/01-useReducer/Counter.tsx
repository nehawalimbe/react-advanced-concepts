import { useReducer } from "react";
type CounterAction = 
| {type: 'INCREMENT', payload: number}
| {type: 'DECREMENT', payload: number}
| {type: 'RESET'};

function reducer(state: number, action:CounterAction) {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;
    case "RESET":
      return 0;
    default: 
      return state;
  }
}

function Counter() {
  const [count, dispatch] = useReducer(reducer, 0);
  const handleIncrement = () => {
    dispatch({ type: "INCREMENT", payload: 1 });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT", payload: 1 });
  };
  const handleReset = () => {
    dispatch({ type: "RESET" });
  };
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
export default Counter;