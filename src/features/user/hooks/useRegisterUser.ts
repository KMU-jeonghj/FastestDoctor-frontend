import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { registerUser } from 'entities/user/services/userApi';
import { UserType } from 'entities/user/types/user.type';

export const useRegisterUser = (option?: {
  onSuccess?: () => void;
  onError?: (
    error: AxiosError,
  ) => void;
}) => {
  const queryClient = useQueryClient();

  const { mutate, isPending, isSuccess, isError, error } = useMutation<
    AxiosResponse,
    AxiosError,
    UserType
  >({
    mutationFn: registerUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      option?.onSuccess?.();
    },
    onError: (err) => {
      console.error('사용자 등록 실패:', err);
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
