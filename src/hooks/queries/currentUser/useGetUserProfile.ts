import { useQuery } from '@tanstack/react-query';

import { getCurrentUserProfile } from '@api/currentUser/users';
import { UserNotFoundError, UserProfile } from '@types';

export const useGetUserProfile = (userId?: string) =>
  useQuery({
    enabled: !!userId,
    queryFn: () =>
      getCurrentUserProfile().then(
        ({ data }) => (data[0] as UserProfile) ?? (data as UserNotFoundError),
      ),
    queryKey: ['users', userId],
  });
