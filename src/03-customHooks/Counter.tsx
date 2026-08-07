import { useState } from "react"
import usePrevious from "./usePrevious";

function Counter() {
    const [count, setCount] = useState(0);
    const previousCount = usePrevious(count);
    const handleClick = function () {
        // usePrevious(count); // We can not hooks inside event handlers. Hooks can be used in 
        // Hooks can only be called:
        // ✅ At the top level of a React component
        // ✅ At the top level of another Custom Hook
        setCount(prev => prev +1);
    }
    return(<div>
        <h1>{count}</h1>
        <h2>{previousCount}</h2>
        <button onClick={handleClick}>Increment</button>
    </div>)
}
export default Counter;