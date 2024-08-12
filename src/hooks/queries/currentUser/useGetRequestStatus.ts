import { useQuery } from '@tanstack/react-query';

import { getCurrentUserAssessmentRequestStatus } from '@api/currentUser/assessmentRequests';

export const useGetRequestStatus = (propertyId?: number) =>
  useQuery({
    enabled: !!propertyId,
    queryFn: () => getCurrentUserAssessmentRequestStatus(propertyId!).then(({ data }) => data),
    queryKey: ['property-request-status', propertyId],
  });
