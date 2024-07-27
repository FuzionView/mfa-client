import { MutationOptions, useMutation } from '@tanstack/react-query';

import { Property } from '@types';
import { createCurrentUserProperty } from '../../../api/currentUser/properties';

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
