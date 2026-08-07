import { useEffect, useState } from "react";

function useLocalStorage(key: string, initialValue: string) {
  const [value, setValue] = useState(() => {
    let storedValue = localStorage.getItem(key);
    if (storedValue !== null) {
      return JSON.parse(storedValue);
    }
    return initialValue;
  });
  useEffect(() => {
    // setValue(storageValue); // This will reset the value. if use sets the value to "dark" and storageValue value is "light" then again "light" is set as a value
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue] as const;
}
export default useLocalStorage;
