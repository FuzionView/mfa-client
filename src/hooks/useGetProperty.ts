import { useQuery } from '@tanstack/react-query';
import { Property } from '@types';
import { getProperty } from '../api/properties';

export const useGetProperty = (userId?: string, propertyId?: number) => {
  return useQuery({
    queryKey: ['property', propertyId],
    queryFn: () => getProperty(userId!, propertyId!).then(({ data }) => data as Property),
    enabled: !!propertyId && !!userId,
  });
};
