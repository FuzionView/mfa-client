import { useQuery } from '@tanstack/react-query';
import { getUserProfile } from '../api/users';

export const useGetUserProfile = (userId?: string) => {
  return useQuery({
    queryKey: ['users', userId],
    queryFn: () => getUserProfile(userId!).then(({ data }) => data),
    enabled: !!userId,
  });
};
