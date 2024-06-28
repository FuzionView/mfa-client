import { useQuery } from '@tanstack/react-query';

import { PropertyWithIdAndStatus } from '@types';
import { getProperties } from '../../api/properties';

export const useGetProperties = (userId?: string) =>
  useQuery({
    enabled: !!userId,
    queryFn: () => getProperties(userId!).then(({ data }) => data as PropertyWithIdAndStatus[]),
    queryKey: ['properties', userId],
  });
