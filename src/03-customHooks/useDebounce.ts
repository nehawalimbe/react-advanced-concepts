import { useEffect, useState } from "react";

function useDebounce(text: string, timeout: number) {
  const [debouncedValue, setDebouncedValue] = useState(text);
  useEffect(() => {
    let timer = setTimeout(() => {
      setDebouncedValue(text);
    }, timeout);
    return () => {
      clearTimeout(timer);
    };
  }, [text, timeout]);
  return debouncedValue;
}

export default useDebounce;
