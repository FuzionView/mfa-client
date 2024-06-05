import { MutationOptions, useMutation } from '@tanstack/react-query';
import { UserProfile } from '@types';
import { updateUserProfile } from '../../api/users';

interface UseUpdateProfileArgs {
  onSuccess?: MutationOptions['onSuccess'];
  onError?: MutationOptions['onError'];
}

type MutateArgs = { userId: string; profile: UserProfile };

export const useUpdateProfile = ({ onSuccess, onError }: UseUpdateProfileArgs) => {
  return useMutation({
    // @ts-expect-error - this is fine
    mutationFn: (data: MutateArgs) => {
      return updateUserProfile(data.userId, data.profile);
    },
    onSuccess,
    onError,
  });
};
