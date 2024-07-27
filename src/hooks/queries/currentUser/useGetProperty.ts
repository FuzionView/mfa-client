import { useQuery } from '@tanstack/react-query';

import { Property } from '@types';
import { getCurrentUserProperty } from '../../../api/currentUser/properties';

export const useGetProperty = (userId?: string, propertyId?: number) =>
  useQuery({
    enabled: !!propertyId && !!userId,
    queryFn: () => getCurrentUserProperty(propertyId!).then(({ data }) => data as Property),
    queryKey: ['property', propertyId],
  });
