import { MutationOptions, useMutation } from '@tanstack/react-query';

import { UserProfile } from '@types';
import { updateCurrentUserProfile } from '../../../api/currentUser/users';

interface UseUpdateProfileArgs {
  onSuccess?: MutationOptions['onSuccess'];
  onError?: MutationOptions['onError'];
}

type MutateArgs = { userId: string; profile: UserProfile };

export const useUpdateProfile = ({ onSuccess, onError }: UseUpdateProfileArgs) =>
  useMutation({
    // @ts-expect-error - this is fine
    mutationFn: (data: MutateArgs) =>
      // comment for newline
      updateCurrentUserProfile(data.profile),
    onError,
    onSuccess,
  });
