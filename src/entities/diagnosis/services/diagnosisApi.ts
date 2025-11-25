//url 임시로

import { httpClient } from "../../../shared/api/httpClient";
import type { AnswerRequestType, AnswerResponseType, QuestionResponseType } from "../types/diagnosis.type";

export const getQuestion = async (): Promise<QuestionResponseType> => {
  const response = await httpClient.get('/v1/question');
  return response.data;
};
``
export const answer = async (data: AnswerRequestType): Promise<AnswerResponseType> => {
  const response = await httpClient.post('/v1/answers', data);
  return response.data;
}

