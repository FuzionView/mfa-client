import { useQuery } from '@tanstack/react-query';
import { UserProfile } from '@types';

import { getUserProfile } from '../../api/users';

export const useGetUserProfile = (userId?: string) =>
  useQuery({
    enabled: !!userId,
    queryFn: () => getUserProfile(userId!).then(({ data }) => data[0] as UserProfile),
    queryKey: ['users', userId],
  });
