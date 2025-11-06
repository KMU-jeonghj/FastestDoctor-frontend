import { httpClient } from "../../../shared/api/httpClient";
import type { UserType } from "../types/user.type";

export const getResult = async (data: UserType)  => {
  const response = await httpClient.post('/user', { params: data });
  return response.data;
};