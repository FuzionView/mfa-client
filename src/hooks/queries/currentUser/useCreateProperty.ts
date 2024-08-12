import { MutationOptions, useMutation } from '@tanstack/react-query';

import { createCurrentUserProperty } from '@api/currentUser/properties';
import { Property } from '@types';

interface UseUpdateProfileArgs {
  onSuccess?: MutationOptions['onSuccess'];
  onError?: MutationOptions['onError'];
}

type MutateArgs = { property: Property };

export const useCreateProperty = ({ onSuccess, onError }: UseUpdateProfileArgs) =>
  useMutation({
    // @ts-expect-error - this is fine
    mutationFn: (data: MutateArgs) =>
      // comment so it doesn't condense to one line
      createCurrentUserProperty(data.property),
    onError,
    onSuccess,
  });
