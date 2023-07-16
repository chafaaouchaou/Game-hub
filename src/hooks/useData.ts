import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResponce<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [datas, setDatas] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const getgenres = () => {
    const controller = new AbortController();
    apiClient
      .get<FetchResponce<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setDatas(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;

        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  };

  useEffect(() => {
    setLoading(true);
    const abort = getgenres();

    return abort;
  }, []);

  return { datas, error, isLoading };
};

export default useData;
