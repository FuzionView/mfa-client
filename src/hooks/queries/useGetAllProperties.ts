import { useQuery } from '@tanstack/react-query';

import { getAllProperties } from '@api/allProperties';
import { PropertyWithIdAndStatus } from '@types';

export const useGetAllProperties = (pageNumber: number) =>
  useQuery<PropertyWithIdAndStatus[]>({
    enabled: pageNumber !== undefined,
    queryFn: () => getAllProperties(pageNumber).then(({ data }) => data),
    queryKey: ['get-all-properties', pageNumber],
  });
