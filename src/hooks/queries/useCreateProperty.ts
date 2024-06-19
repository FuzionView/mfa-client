import { MutationOptions, useMutation } from '@tanstack/react-query';
import { Property } from '@types';

import { createProperty } from '../../api/properties';

interface UseUpdateProfileArgs {
  onSuccess?: MutationOptions['onSuccess'];
  onError?: MutationOptions['onError'];
}

type MutateArgs = { userId: string; property: Property };

export const useCreateProperty = ({ onSuccess, onError }: UseUpdateProfileArgs) => useMutation({
    // @ts-expect-error - this is fine
    mutationFn: (data: MutateArgs) => createProperty(data.userId, data.property),
    onError,
    onSuccess,
  });
