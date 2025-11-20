import { httpClient } from "../../../shared/api/httpClient";
import type { ResultResponseType } from "../types/result.type";


export const getResult = async (): Promise<ResultResponseType> => {
  const response = await httpClient.get('/v1/result');
  return response.data;
};