import { useQuery } from '@tanstack/react-query';
import { Property } from '@types';

import { getProperty } from '../../api/properties';

export const useGetProperty = (userId?: string, propertyId?: number) =>
  useQuery({
    enabled: !!propertyId && !!userId,
    queryFn: () => getProperty(userId!, propertyId!).then(({ data }) => data as Property),
    queryKey: ['property', propertyId],
  });
