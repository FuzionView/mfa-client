import { useQuery } from '@tanstack/react-query';

import { getCurrentUserAssessmentRequestStatus } from '@api/currentUser/assessmentRequests';
import { AssessmentRequestStatusResponse } from '@types';

export const useGetRequestStatus = (propertyId?: number) =>
  useQuery<AssessmentRequestStatusResponse>({
    enabled: !!propertyId,
    queryFn: () => getCurrentUserAssessmentRequestStatus(propertyId!).then(({ data }) => data),
    queryKey: ['property-request-status', propertyId],
  });
