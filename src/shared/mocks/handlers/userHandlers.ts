import { http } from 'msw';
import { createSuccessResponse } from '../util/response';
import { UserType } from 'entities/user/types/user.type';


export const userHandlers = [
  http.post(
    `${import.meta.env.VITE_API_BASE_URL}/users`,
    async ({ request }) => {
      const formData = await request.formData();
      const newUser: UserType = {
        name: formData.get('name') as string,
        age: Number(formData.get('age')),
        gender: Number(formData.get('gender')),
        location: formData.get('location') as string,
        advancedInformation: formData.get('advancedInformation') as string,
      };
      return createSuccessResponse('유저 등록 성공', newUser);
    },
  )
];