import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { UserType } from 'mfa-server/src/types';

import { Callout, Flex } from '@radix-ui/themes';

import { ForesterProfile } from '../components/ForesterProfile';
import { LandownerProfile } from '../components/LandownerProfile';
import { LoadingCallout } from '../components/LoadingCallout';
import { useGetUserProfile } from '../hooks/queries/currentUser/useGetUserProfile';

export const Profile: React.FC = () => {
  const { user } = useAuth0();
  const { data: profileData, isError, isLoading } = useGetUserProfile(user?.sub);
  const navigate = useNavigate();

  useEffect(() => {
    if (!profileData) return;

    if ('error' in profileData && profileData.error === 'User not found') {
      navigate('/create-profile');
    }
  }, [profileData]);

  if (isLoading) {
    return <LoadingCallout text="Loading profile..." />;
  }

  if (isError || !profileData) {
    return <Callout.Root color="red">Error retrieving profile</Callout.Root>;
  }

  return (
    <Flex direction="column" gap="3">
      {profileData.user_type === UserType.Forester ? <ForesterProfile /> : <LandownerProfile />}
    </Flex>
  );
};
