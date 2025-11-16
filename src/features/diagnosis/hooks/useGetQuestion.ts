import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getQuestion } from 'entities/diagnosis/services/diagnosisApi';
import { QuestionResponseType } from 'entities/diagnosis/types/diagnosis.type';
import { useEffect } from 'react';

export const useGetQuestion = (option?: {
  onSuccess?: (data: QuestionResponseType) => void;
  onError?: (error: AxiosError) => void;
}) => {
  const { data, isLoading, isError, error } = useQuery<
    QuestionResponseType,
    AxiosError
  >({
    queryKey: ['question'],
    queryFn: getQuestion,
  });

  // 후처리 함수 실행
  useEffect(() => {
    if (data) option?.onSuccess?.(data);
  }, [data, option?.onSuccess]);

  useEffect(() => {
    if (error) option?.onError?.(error);
  }, [error, option?.onError]);

  return {
    data,
    isLoading,
    isError,
    error,
  };
};
