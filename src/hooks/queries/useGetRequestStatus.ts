import { useQuery } from '@tanstack/react-query';
import { getRequestStatus } from '../../api/assessmentRequests';

export const useGetRequestStatus = (propertyId?: number) => {
  return useQuery({
    queryKey: ['property-request-status', propertyId],
    queryFn: () => getRequestStatus(propertyId!).then(({ data }) => data),
    enabled: !!propertyId,
  });
};
