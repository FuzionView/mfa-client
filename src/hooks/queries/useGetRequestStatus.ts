import { useQuery } from '@tanstack/react-query';

import { getRequestStatus } from '../../api/assessmentRequests';

export const useGetRequestStatus = (propertyId?: number) =>
  useQuery({
    enabled: !!propertyId,
    queryFn: () => getRequestStatus(propertyId!).then(({ data }) => data),
    queryKey: ['property-request-status', propertyId],
  });
