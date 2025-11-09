import { http } from 'msw';
import { createSuccessResponse } from '../util/response';
import { ResultResponseType } from 'entities/result/types/result.type';

const result = "결과입니다.";

const department = "내과";


export const resultHandlers = [

  http.get(
    `${import.meta.env.VITE_API_BASE_URL}/result`,
    async () => {
      const res: ResultResponseType = {
        result,
        department
      };
      return createSuccessResponse('결과 조회 성공', res);
    }
  ),

];