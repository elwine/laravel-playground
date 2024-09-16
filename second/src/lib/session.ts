import axios from "axios";

export const setSession = async (token: string, user: object) => {
  await axios.post(
    `${process.env.APP_URL}/api/session`,
    JSON.stringify({ token, user }),
  );
};
