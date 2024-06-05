import { useQuery } from '@tanstack/react-query';
import { getUserProfile } from '../../api/users';
import { UserProfile } from '@types';

export const useGetUserProfile = (userId?: string) => {
  return useQuery({
    queryKey: ['users', userId],
    queryFn: () => getUserProfile(userId!).then(({ data }) => data[0] as UserProfile),
    enabled: !!userId,
  });
};
