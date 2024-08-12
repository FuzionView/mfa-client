import { MutationOptions, useMutation } from '@tanstack/react-query';

import { deleteCurrentUserProperty } from '@api/currentUser/properties';

interface UseDeletePropertyArgs {
  onSuccess?: MutationOptions['onSuccess'];
  onError?: MutationOptions['onError'];
}

type MutateArgs = { propertyId: number };

export const useDeleteCurrentUserProperty = ({ onSuccess, onError }: UseDeletePropertyArgs) =>
  useMutation({
    // @ts-expect-error - this is fine
    mutationFn: (data: MutateArgs) =>
      // comment for newline
      deleteCurrentUserProperty(data.propertyId),
    onError,
    onSuccess,
  });
