"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
// import { notification } from "antd";

import Cookies from "js-cookie";

// import { usePathname, useRouter } from "@/components";
import { useMutation } from "@/utils";
import api from "@/utils/CustomAxios";
import { useToast } from "@chakra-ui/react";
import { usePathname, useRouter } from "next/navigation";

interface AuthProviderValueType {
  isAuth: boolean;
  loading: boolean;
  logout: () => void;
  access: string | null;
  user: PayloadType | null;
  toLogin: (pathname?: string) => void;
  login: (data: LoginDataType) => void;
}

function parseJwt(token: string) {
  if (!token) {
    return;
  }
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace("-", "+").replace("_", "/");
  return JSON.parse(window.atob(base64));
}

const AuthContext = createContext({ isAuth: false } as AuthProviderValueType);

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [access, setAccess] = useState<string | null>(null);
  const [user, setUser] = useState<PayloadType | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const toast = useToast();
  const pathname = usePathname();

  const { loading: loadingRefresh, request } = useMutation({
    uri: "/auth/loginWithRefreshToken",
  });
  const { loading: loadingLogout, request: requestLogout } = useMutation({
    uri: "/auth/logout",
  });

  useEffect(() => {
    async function loadUserFromCookies() {
      const refreshToken = Cookies.get("token");
      const idToken = Cookies.get("idToken");

      if (refreshToken) {
        api.defaults.headers.Authorization = `Bearer ${refreshToken}`;
        request({ idToken, refreshToken }).then((res: any) => login(res, true));
      }
      setLoading(false);
    }
    loadUserFromCookies();
  }, []);

  const login = (data: LoginDataType, isRefresh?: boolean) => {
    if (data.accessToken) {
      console.log("<<<<data>>>>", data.accessToken);
      if (data.refreshToken) {
        Cookies.set("token", data.refreshToken, { expires: 1 });
      }
      const usr = parseJwt(data.accessToken);
      Cookies.set("idToken", data.idToken, { expires: 1 });
      Cookies.set("access", data.accessToken, {
        expires: new Date(usr.exp * 1000),
      });

      api.defaults.headers.Authorization = `Bearer ${data.accessToken}`;

      setUser(usr);
      setAccess(data.accessToken);
      if (!isRefresh) {
        toast({
          title: "Амжилттай нэвтэрлээ.",
          description: "We've created your account for you.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        router.push(Cookies.get("redirect") || "/");
      }
    }
  };

  const logout = () => {
    setUser(null);
    setAccess(null);
    Cookies.remove("token");
    Cookies.remove("idToken");
    Cookies.remove("access");
    delete api.defaults.headers.Authorization;
    router.push("/");
    toast({
      title: "Системээс гарлаа",
      description: "We've created your account for you.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    return requestLogout({ accessToken: access });
  };

  const toLogin = (path?: string) => {
    Cookies.set("redirect", path || pathname);
    router.push(pathname === "/checkout" ? "/checkout/auth" : "/auth");
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        toLogin,
        isAuth: !!user,
        user,
        loading: loading || loadingRefresh || loadingLogout,
        access,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export interface LoginDataType {
  accessToken: string;
  refreshToken: string;
  idToken: string;
}

type PayloadType = {
  auth_time: number;
  client_id: string;
  event_id: string;
  exp: number;
  iat: number;
  iss: string;
  jti: string;
  origin_jti: string;
  scope: string;
  sub: string;
  token_use: string;
  username: string;
};
