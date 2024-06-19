import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { ProfileDisplay, PropertyDisplay } from '@components';
import { Callout, Card, Flex } from '@radix-ui/themes';

import { LoadingCallout } from '../components/LoadingCallout';
import { useGetUserProfile } from '../hooks/queries/useGetUserProfile';

export const Profile: React.FC = () => {
  const { user } = useAuth0();
  const { data: profileData, isError, isLoading } = useGetUserProfile(user?.sub);
  const navigate = useNavigate();

  if (isLoading) {
    return <LoadingCallout text="Loading profile..." />;
  }

  if (isError) {
    return <Callout.Root color="red">Error retrieving profile</Callout.Root>;
  }

  // If there is no user data associated with this user ID, then make them
  // complete the profile form
  if (profileData && 'error' in profileData) {
    navigate('/create-profile');
  }

  return (
    <Flex direction="column" gap="3">
      <Card>
        <ProfileDisplay />
      </Card>
      <Card>
        <PropertyDisplay />
      </Card>
    </Flex>
  );
};
