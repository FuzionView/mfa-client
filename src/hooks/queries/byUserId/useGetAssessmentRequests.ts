import { useQuery } from '@tanstack/react-query';

import { getAssessmentRequests } from '@api/anyUser/assessmentRequests';
import { AssessmentRequestResponse } from '@types';

export const useGetAssessmentRequests = (userId?: string, propertyId?: number) =>
  useQuery<AssessmentRequestResponse[]>({
    enabled: !!propertyId && !!userId,
    queryFn: () => getAssessmentRequests(userId!, propertyId!).then(({ data }) => data),
    queryKey: ['get-assessment-requests', propertyId],
  });
5;
