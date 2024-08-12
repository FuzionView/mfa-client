import { MutationOptions, useMutation } from '@tanstack/react-query';

import { AssessmentRequest } from '@types';
import { createCurrentUserAssessmentRequest } from '@api/currentUser/assessmentRequests';

interface UseCreateAssessmentRequestArgs {
  onSuccess?: MutationOptions['onSuccess'];
  onError?: MutationOptions['onError'];
}

type MutateArgs = { propertyId: number; assessmentRequest: AssessmentRequest };

export const useCreateAssessmentRequest = ({
  onSuccess,
  onError,
}: UseCreateAssessmentRequestArgs) =>
  useMutation({
    // @ts-expect-error - this is fine
    mutationFn: (data: MutateArgs) =>
      createCurrentUserAssessmentRequest(data.propertyId, data.assessmentRequest),
    onError,
    onSuccess,
  });
