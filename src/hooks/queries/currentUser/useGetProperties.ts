import { useQuery } from '@tanstack/react-query';

import { getCurrentUserProperties } from '@api/currentUser/properties';
import { PropertyWithIdAndStatus } from '@types';

export const useGetProperties = (userId?: string) =>
  useQuery({
    enabled: !!userId,
    queryFn: () => getCurrentUserProperties().then(({ data }) => data as PropertyWithIdAndStatus[]),
    queryKey: ['properties', userId],
  });
