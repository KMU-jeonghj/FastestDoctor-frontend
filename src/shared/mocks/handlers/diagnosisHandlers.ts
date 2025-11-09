import { http } from 'msw';
import { createSuccessResponse } from '../util/response';
import { AnswerRequestType, QuestionResponseType } from 'entities/diagnosis/types/diagnosis.type';

const question = "어떤 부위의 증상으로 상담을 원하시나요?";

const answer = [
  "머리/두통 관련",
  "목/경추 관련",
  "가슴/흉부 관련",
  "복부/소화기 관련",
  "기타"
];


export const diagnosisHandlers = [

  http.get(
    `${import.meta.env.VITE_API_BASE_URL}/question`,
    async () => {
      const res: QuestionResponseType = {
        question,
        answer
      };
      return createSuccessResponse('질문 조회 성공', res);
    }
  ),

  http.post(
    `${import.meta.env.VITE_API_BASE_URL}/answer`,
    async ({ request }) => {
      const body = (await request.json()) as AnswerRequestType;
      const isClear = body.answer === "기타" ? true : false;
      return createSuccessResponse('답변 성공', isClear);
    },
  )
];