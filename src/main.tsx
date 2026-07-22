import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Counter from "./01-useReducer/Counter";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Counter />
  </StrictMode>,
);