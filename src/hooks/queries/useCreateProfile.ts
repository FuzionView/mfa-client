import { MutationOptions, useMutation } from '@tanstack/react-query';

import { UserProfile } from '@types';
import { createUserProfile } from '../../api/users';

interface UseUpdateProfileArgs {
  onSuccess?: MutationOptions['onSuccess'];
  onError?: MutationOptions['onError'];
}

type MutateArgs = { userId: string; profile: UserProfile };

export const useCreateProfile = ({ onSuccess, onError }: UseUpdateProfileArgs) =>
  useMutation({
    // @ts-expect-error - this is fine
    mutationFn: (data: MutateArgs) => createUserProfile(data.userId, data.profile),
    onError,
    onSuccess,
  });
