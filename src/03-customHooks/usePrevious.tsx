import { useEffect, useRef } from "react";


function usePrevious(value: number): number | undefined {
    const prevCount = useRef<number|undefined>(undefined);

    useEffect(() => {
        prevCount.current = value;
    },[value]);
    return prevCount.current;
}

export default usePrevious;