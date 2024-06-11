import { MutationOptions, useMutation } from '@tanstack/react-query';
import { AssessmentRequest } from '@types';
import { createAssessmentRequest } from '../../api/assessmentRequests';

interface UseCreateAssessmentRequestArgs {
  onSuccess?: MutationOptions['onSuccess'];
  onError?: MutationOptions['onError'];
}

type MutateArgs = { propertyId: number; assessmentRequest: AssessmentRequest };

export const useCreateAssessmentRequest = ({
  onSuccess,
  onError,
}: UseCreateAssessmentRequestArgs) => {
  return useMutation({
    // @ts-expect-error - this is fine
    mutationFn: (data: MutateArgs) => {
      return createAssessmentRequest(data.propertyId, data.assessmentRequest);
    },
    onSuccess,
    onError,
  });
};
