import { MutationOptions, useMutation } from '@tanstack/react-query';

import { UserProfile } from '@types';
import { createCurrentUserProfile } from '../../../api/currentUser/users';
interface UseUpdateProfileArgs {
  onSuccess?: MutationOptions['onSuccess'];
  onError?: MutationOptions['onError'];
}

type MutateArgs = { profile: UserProfile };

export const useCreateProfile = ({ onSuccess, onError }: UseUpdateProfileArgs) =>
  useMutation({
    // @ts-expect-error args are fine
    mutationFn: (data: MutateArgs) =>
      // comment so it doesn't combine into one line
      createCurrentUserProfile(data.profile),
    onError,
    onSuccess,
  });
