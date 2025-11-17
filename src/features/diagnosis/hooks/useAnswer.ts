import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { answer } from 'entities/diagnosis/services/diagnosisApi';
import { AnswerRequestType, AnswerResponseType } from 'entities/diagnosis/types/diagnosis.type';

export const useAnswer = (option?: {
  onSuccess?: () => void;
  onError?: (
    error: AxiosError,
  ) => void;
}) => {
  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess, isError, error } = useMutation<
    AnswerResponseType,
    AxiosError,
    AnswerRequestType
  >({
    mutationFn: answer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['answer'] });
      option?.onSuccess?.();
    },
    onError: (err) => {
      console.error('질문 답변 실패:', err);
      option?.onError?.(err);
    },
  });
  return {
    mutate,
    isPending,
    isSuccess,
    isError,
    error,
  };
};
