"use client";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import api from "../CustomAxios";

export interface UseQueryProps {
  uri: string;
  manual?: boolean;
  param?: any;
}

export interface UseQueryValue<T> {
  data: T;
  error: any;
  loading: boolean;
  fetchData: (path?: string) => Promise<any>;
}

export const useQuery = <T,>({
  uri,
  manual,
  param,
}: UseQueryProps): UseQueryValue<T> => {
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState();

  useEffect(() => {
    if (!loading && !manual) fetchData(uri);
  }, [manual]);
  9;
  const fetchData = useCallback(
    (path: string = uri, params: string = param) => {
      setLoading(true);
      return api
        .get(`${path}`, {
          params,
          // headers: {
          //   Authorization: `Bearer ${token}`,
          // },
        })
        .then((res: any) => {
          setLoading(false);
          setResponse(res.data as T);
          return res.data;
        })
        .catch((e) => {
          setLoading(false);
          setError(e);
          return e;
        });
    },
    []
  );

  return { data: response as T, loading, error, fetchData };
};
