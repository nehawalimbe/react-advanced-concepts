import { useEffect, useRef } from "react";

function InputRef() {
  const inputFieldRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputFieldRef.current?.focus();
  }, []);
  //   const inputFieldRef = useRef<HTMLInputElement>(null);
//   const setFocus = () => {
//     inputFieldRef.current?.focus();
//   };
  return (
    <div>
      <input ref={inputFieldRef} />
      {/* <button onClick={setFocus}>Focus Input</button> */}
    </div>
  );
}

export default InputRef;
