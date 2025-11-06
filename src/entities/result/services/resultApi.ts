import { httpClient } from "../../../shared/api/httpClient";
import type { ResultResponseType } from "../types/result.type";


export const getResult = async (): Promise<ResultResponseType> => {
  const response = await httpClient.get('/result');
  return response.data;
};