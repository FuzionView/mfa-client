import { useQuery } from '@tanstack/react-query';

import { UserNotFoundError, UserProfile } from '@types';
import { getCurrentUserProfile } from '../../../api/currentUser/users';

export const useGetUserProfile = (userId?: string) =>
  useQuery({
    enabled: !!userId,
    queryFn: () =>
      getCurrentUserProfile().then(
        ({ data }) => (data[0] as UserProfile) ?? (data as UserNotFoundError),
      ),
    queryKey: ['users', userId],
  });
