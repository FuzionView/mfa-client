import { useQuery } from '@tanstack/react-query';

import { getCurrentUserAssessmentRequests } from '@api/currentUser/assessmentRequests';
import { AssessmentRequestResponse } from '@types';

export const useGetAssessmentRequests = (propertyId?: number) =>
  useQuery<AssessmentRequestResponse[]>({
    enabled: !!propertyId,
    queryFn: () => getCurrentUserAssessmentRequests(propertyId!).then(({ data }) => data),
    queryKey: ['get-assessment-requests', propertyId],
  });
5;
