import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { UserProfile, UserType } from 'mfa-server/src/types';

import { Callout, Flex } from '@radix-ui/themes';

import { ForesterProfile } from '../components/ForesterProfile';
import { LandownerProfile } from '../components/LandownerProfile';
import { LoadingCallout } from '../components/LoadingCallout';
import { useGetUserProfile } from '../hooks/queries/useGetUserProfile';

export const Profile: React.FC = () => {
  const { user } = useAuth0();
  const { data: profileData, isError, isLoading } = useGetUserProfile(user?.sub);
  const navigate = useNavigate();

  if (isLoading) {
    return <LoadingCallout text="Loading profile..." />;
  }

  // If there is no user data associated with this user ID, then make them
  // complete the profile form. If it's a different error, show an error message
  if (isError) {
    if (profileData && 'error' in profileData && profileData.error === 'User not found') {
      navigate('/create-profile');
      return null;
    }
    return <Callout.Root color="red">Error retrieving profile</Callout.Root>;
  }

  const { user_type } = profileData as UserProfile;

  return (
    <Flex direction="column" gap="3">
      {user_type === UserType.Forester ? <ForesterProfile /> : <LandownerProfile />}
    </Flex>
  );
};
