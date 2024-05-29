import { useQuery } from '@tanstack/react-query';
import { getProperties } from '../api/properties';
import { Property } from '@types';

export const useGetProperties = (userId?: string) => {
  return useQuery({
    queryKey: ['properties', userId],
    queryFn: () => getProperties(userId!).then(({ data }) => data as Property[]),
    enabled: !!userId,
  });
};
