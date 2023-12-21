"use client";
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import api from "../CustomAxios";

export interface UseMutationProps {
  uri: string;
  method?: "post" | "put" | "delete" | "patch";
}

export interface UseMutationValue {
  error: any;
  loading: boolean;
  request: (data?: any) => Promise<AxiosResponse<any, any>>;
}

export const useMutation = ({
  uri,
  method = "post",
}: UseMutationProps): UseMutationValue => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState();

  const request = (data: any): Promise<AxiosResponse<any, any>> => {
    setLoading(true);
    return api
      .request({
        url: uri,
        data,
        method,
      })
      .then((res) => {
        setLoading(false);
        return res;
      })
      .catch((e) => {
        setLoading(false);
        setError(e);
        return Promise.reject(e);
      });
  };

  return { loading, error, request };
};
