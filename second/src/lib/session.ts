import axios from "axios";
import { cookies } from "next/headers";

export const setSession = async (token: string, user: object) => {
  await axios.post(
    `${process.env.APP_URL}/api/session`,
    JSON.stringify({ token, user }),
  );
};

export const getSession = async () => {
  const token = cookies().get("token")?.value;
  const res = await axios.get(process.env.APP_URL + "/api/session", {
    headers: {
      token,
    },
  });
  if (res.statusText != "OK") {
    return false;
  }
  return res.data;
};
