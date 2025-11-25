import { HttpResponse } from 'msw';

// export const createSuccessResponse = (message?: string, data?: unknown) => {
//   if (data !== undefined && data !== null) {
//     return HttpResponse.json(data);
//   }

//   return HttpResponse.json(message ?? '');
// };
export const createSuccessResponse = (message?: string, data?: unknown) => {
  // undefined(인자가 없음)일 때만 메시지를 보냄
  // null은 "유효한 값"으로 취급하여 그대로 반환
  if (data !== undefined) {
    return HttpResponse.json(data);
  }

  return HttpResponse.json(message ?? 'Success');
};

export const createErrorResponse = (
  status: number,
  message: string,
  errorCode: string,
) =>
  HttpResponse.json(
    {
      statusCode: status,
      message,
      error: errorCode,
      timestamp: new Date().toISOString(),
    },
    { status },
  );
