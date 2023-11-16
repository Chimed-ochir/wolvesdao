import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL,
  isServer = typeof window === "undefined";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    //   Authorization:
    //     "Bearer eyJraWQiOiJDbkhCXC9yb205YVNaM1VnOGhVUEF2RlFBMUJNWWtNbnlwdHpzdFwvMUUycU09IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJlZjE4ZTM3My1mNGJlLTRhNzYtYjRkMi04YzA2MTQyODFjYjIiLCJjb2duaXRvOmdyb3VwcyI6WyJhZG1pbiJdLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtd2VzdC0xLmFtYXpvbmF3cy5jb21cL3VzLXdlc3QtMV9vTFFCNDQ0NmsiLCJjbGllbnRfaWQiOiI3NGd0czJwZmpiY2c0c2dyajBiMGFydWs0dSIsIm9yaWdpbl9qdGkiOiI5ZjEzYjUyZC03ZGYzLTQ3MzgtYjcxMC01ZmNjZjVhYWUxNmUiLCJldmVudF9pZCI6ImZlZGVmYmUxLTRiMzQtNDYwNS1iYzdlLTRiOGIyMzNmNjY2ZSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE3MDAwMTk2MDYsImV4cCI6MTcwMDAyMzIwNiwiaWF0IjoxNzAwMDE5NjA2LCJqdGkiOiIyYzhhZGJmNS01NDQ1LTQ4ZTktYjZjNy05Y2FhN2FkZTQ2ZWEiLCJ1c2VybmFtZSI6ImRpc2NvZGlzY28ifQ.njZsSOsHYkbFea5rB6SJBWj1hlTHNgoIL56jerS57gy99tHSnNSPbC3uvSYzcnvzxBN3vzW7gSQyT52ivfn2xpN8HQgEjHGn4KifFK3vt_LgX0XLhWOBbVhO5PxyinGjQxms6IB7SKuPZGhethxq8hJwKpIFDmwxcuM5UpRffwoI3yiZSjlqJxghIRSsyxNLJhu1NB8AHYm66ujXIGbqi91tIk3saXVg7Gob6_C2kuexOOWMq_jeYgHTIfMxTfJNiSpihpBLsa5arxqQMl7xlYZZVoTnLWsROaX35jBMgJS5hMXK0f-B55AvjehWWoS4a032OUnfUMWxNERmtVnA8w",
  },
});

api.interceptors.request.use(async (config) => {
  if (isServer) {
    const { cookies } = await import("next/headers"),
      token = cookies().get("access")?.value;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
  } else {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)access\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
  }

  return config;
});

api.interceptors.response.use(
  (response) =>
    // Do something with the response data
    response.data,
  (error) =>
    // Handle any error that occurs in the response
    Promise.reject(error?.response?.data ?? error)
);

export default api;
