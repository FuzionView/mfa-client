import { MutationOptions, useMutation } from '@tanstack/react-query';

import { deleteProperty } from '../../api/properties';

interface UseDeletePropertyArgs {
  onSuccess?: MutationOptions['onSuccess'];
  onError?: MutationOptions['onError'];
}

type MutateArgs = { userId: string; propertyId: number };

export const useDeleteProperty = ({ onSuccess, onError }: UseDeletePropertyArgs) =>
  useMutation({
    // @ts-expect-error - this is fine
    mutationFn: (data: MutateArgs) => deleteProperty(data.userId, data.propertyId),
    onError,
    onSuccess,
  });
