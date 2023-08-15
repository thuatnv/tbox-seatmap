import { useEffect, useState } from "react";
import fetcher from "api/fetcher";
import { AxiosResponse } from "axios";

type ReturnError = Error | string | null | unknown | undefined;
type ReturnBoolean = boolean | unknown | undefined;
interface ApiResponse<T> {
  data: T;
}

const useGetData = <T extends object>(
  url: string
): [T | null, ReturnError, ReturnBoolean] => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<ReturnError>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rs: AxiosResponse<ApiResponse<T>> = await fetcher.get(url);

        // SET TIMEOUT IS FOR DEV ONLY
        setTimeout(() => {
          setData(rs?.data?.data);
          setLoading(false);
        }, 500);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
          console.log("[ERROR LOG]: ", error.message);
        } else {
          setError(error);
          console.log("[ERROR LOG]: ", error);
        }
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return [data, error, loading];
};

export default useGetData;
