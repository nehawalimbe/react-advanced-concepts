import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import Counter from "./01-useReducer/Counter";
// import PrevCounter from "./02-useRef/PrevCounter";
import Counter from "./03-customHooks/Counter";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Counter /> */}
    {/* <PrevCounter/> */}
    <Counter/>
  </StrictMode>,
);