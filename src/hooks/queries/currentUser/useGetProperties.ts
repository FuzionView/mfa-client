import { useQuery } from '@tanstack/react-query';

import { PropertyWithIdAndStatus } from '@types';
import { getCurrentUserProperties } from '../../../api/currentUser/properties';

export const useGetProperties = (userId?: string) =>
  useQuery({
    enabled: !!userId,
    queryFn: () => getCurrentUserProperties().then(({ data }) => data as PropertyWithIdAndStatus[]),
    queryKey: ['properties', userId],
  });
