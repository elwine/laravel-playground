import { apiClient } from "./api-client";

type User = {
  id: number;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
  profile_photo_url: string;
};

export const getProfile = async (token: string) => {
  const res = await apiClient.get<{ success: boolean; user: User }>(
    "auth/profile",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  if (res.statusText != "OK") return false;
  return res.data;
};
