import { useQuery } from '@tanstack/react-query';

import { getProperty } from '@api/anyUser/properties';
import { PropertyWithIdAndStatus } from '@types';

export const useGetProperty = (userId?: string, propertyId?: number) =>
  useQuery<PropertyWithIdAndStatus>({
    enabled: !!propertyId && !!userId,
    queryFn: () => getProperty(userId!, propertyId!).then(({ data }) => data),
    queryKey: ['property', propertyId],
  });
5;
