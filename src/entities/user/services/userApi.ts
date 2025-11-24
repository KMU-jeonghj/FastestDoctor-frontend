import { httpClient } from "../../../shared/api/httpClient";
import type { UserType } from "../types/user.type";

export const registerUser = async (data: UserType) => {
  const response = await httpClient.post('/v1/users', { data });
  return response.data;
};