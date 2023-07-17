import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponce<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [datas, setDatas] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  const getgenres = () => {
    const controller = new AbortController();
    apiClient
      .get<FetchResponce<T>>(endpoint, {
        signal: controller.signal,
        ...requestConfig,
      })
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

  useEffect(
    () => {
      setLoading(true);
      const abort = getgenres();

      return abort;
    },
    deps ? [...deps] : []
  );

  return { datas, error, isLoading };
};

export default useData;
