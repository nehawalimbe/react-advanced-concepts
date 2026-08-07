import { useEffect, useState } from "react";

function useFetch(url: string) {
  const [data, setData] = useState(null);
  const [err, setErr] = useState<null | string>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setErr(null); 
      try {
        const response = await fetch(url);
        if (!response.ok) {
           throw new Error("Failed to fetch the data");
        }
        const resData = await response.json();
        setData(resData);
      } catch (error) {
        if (error instanceof Error) {
          setErr(error.message);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  return { data, loading, err };
}
export default useFetch;
