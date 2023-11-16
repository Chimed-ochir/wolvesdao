import api from "../CustomAxios";

export const GetPoll = async ({ header }: { header: any }) => {
  try {
    const res = await api.get("/poll", {
      headers: header,
    });
    return res.data;
  } catch (e) {
    return e;
  }
};
