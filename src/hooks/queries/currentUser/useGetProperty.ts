import { useQuery } from '@tanstack/react-query';

import { getCurrentUserProperty } from '@api/currentUser/properties';
import { Property } from '@types';

export const useGetProperty = (userId?: string, propertyId?: number) =>
  useQuery<Property>({
    enabled: !!propertyId && !!userId,
    queryFn: () => getCurrentUserProperty(propertyId!).then(({ data }) => data),
    queryKey: ['property', propertyId],
  });
