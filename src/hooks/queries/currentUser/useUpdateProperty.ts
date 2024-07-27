import { MutationOptions, useMutation } from '@tanstack/react-query';

import { Property } from '@types';
import { updateCurrentUserProperty } from '../../../api/currentUser/properties';

interface UseUpdatePropertyArgs {
  onSuccess?: MutationOptions['onSuccess'];
  onError?: MutationOptions['onError'];
}

type MutateArgs = { userId: string; propertyId: number; property: Property };

export const useUpdateProperty = ({ onSuccess, onError }: UseUpdatePropertyArgs) =>
  useMutation({
    // @ts-expect-error - this is fine
    mutationFn: (data: MutateArgs) =>
      // comment for newline
      updateCurrentUserProperty(data.propertyId, data.property),
    onError,
    onSuccess,
  });
