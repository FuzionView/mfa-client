import { useQuery } from '@tanstack/react-query';

import { getUserContactInfo } from '@api/anyUser/users';
import { UserContactInfo } from '@types';

export const useGetUserContactInfo = (userId?: string) =>
  useQuery<UserContactInfo>({
    enabled: !!userId,
    queryFn: () => getUserContactInfo(userId!).then(({ data }) => data),
    queryKey: ['user-contact-info', userId],
  });
5;
