import { useQuery } from '@tanstack/react-query';

import { getCurrentUserProperty } from '@api/currentUser/properties';
import { PropertyWithIdAndStatus } from '@types';

export const useGetProperty = (propertyId?: number) =>
  useQuery<PropertyWithIdAndStatus>({
    enabled: !!propertyId,
    queryFn: () => getCurrentUserProperty(propertyId!).then(({ data }) => data),
    queryKey: ['property', propertyId],
  });
