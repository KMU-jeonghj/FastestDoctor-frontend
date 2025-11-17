import { useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { getResult } from 'entities/result/services/resultApi';
import { ResultResponseType } from 'entities/result/types/result.type';
import { useEffect } from 'react';

export const useGetResult = (option?: {
  onSuccess?: (data: ResultResponseType) => void;
  onError?: (error: AxiosError) => void;
}) => {
  const { data, isLoading, isError, error } = useQuery<
    ResultResponseType,
    AxiosError
  >({
    queryKey: ['result'],
    queryFn: getResult,
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
