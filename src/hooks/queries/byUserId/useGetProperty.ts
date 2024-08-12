import { useQuery } from '@tanstack/react-query';

import { getProperty } from '@api/anyUser/properties';
import { Property } from '@types';

export const useGetProperty = (userId?: string, propertyId?: number) =>
  useQuery<Property>({
    enabled: !!propertyId && !!userId,
    queryFn: () => getProperty(userId!, propertyId!).then(({ data }) => data as Property),
    queryKey: ['property', propertyId],
  });
5;
