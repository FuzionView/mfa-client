import { MutationOptions, useMutation } from '@tanstack/react-query';

import { Property } from '@types';
import { updateProperty } from '../../api/properties';

interface UseUpdatePropertyArgs {
  onSuccess?: MutationOptions['onSuccess'];
  onError?: MutationOptions['onError'];
}

type MutateArgs = { userId: string; propertyId: number; property: Property };

export const useUpdateProperty = ({ onSuccess, onError }: UseUpdatePropertyArgs) =>
  useMutation({
    // @ts-expect-error - this is fine
    mutationFn: (data: MutateArgs) => updateProperty(data.userId, data.propertyId, data.property),
    onError,
    onSuccess,
  });
