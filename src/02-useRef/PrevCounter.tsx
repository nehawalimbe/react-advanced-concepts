import { useRef, useState } from "react";

function PrevCounter() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(0);
  const handleClick = () => {
    prevCount.current = count;
    setCount(count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      {/* <h1>{prevCount.current}</h1> */}
      <button onClick={handleClick}> Increment </button>
    </div>
  );
}

export default PrevCounter;