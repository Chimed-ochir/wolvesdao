"use client";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import api from "../CustomAxios";

export interface UseQueryProps {
  uri: string;
  manual?: boolean;
  params?: any;
}

export interface UseQueryValue<T> {
  data: T;
  error: any;
  loading: boolean;
  pageCount: number;
  fetchData: (path?: string, params?: any) => Promise<any>;
}

export const useQuery = <T,>({
  uri,
  manual,
  params,
}: UseQueryProps): UseQueryValue<T> => {
  const [loading, setLoading] = useState<boolean>(false);
  const [pageCount, setPageCount] = useState<number>(0);
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState();

  useEffect(() => {
    // if (!loading && !manual) fetchData(uri);
  }, [manual]);

  const fetchData = useCallback((path: string = uri, fetchParams?: any) => {
    setLoading(true);
    return api
      .get(`${path}`, {
        params: { ...params, ...fetchParams },
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
      })
      .then((res: any) => {
        setLoading(false);
        setPageCount(res.pageCount);
        setResponse(res.data as T);
        return res.data;
      })
      .catch((e) => {
        setLoading(false);
        setError(e);
        return e;
      });
  }, []);

  return { data: response as T, loading, pageCount, error, fetchData };
};
