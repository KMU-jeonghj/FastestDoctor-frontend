import { http } from 'msw';
import { createSuccessResponse } from '../util/response';
import { UserType } from 'entities/user/types/user.type';


export const userHandlers = [
  http.post(
    `${import.meta.env.VITE_API_BASE_URL}/v1/users`,
    async ({ request }) => {
      const newUser = (await request.json()) as UserType;
      return createSuccessResponse('유저 등록 성공', newUser);
    },
  )
];