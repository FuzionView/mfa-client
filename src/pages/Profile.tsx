import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { ProfileDisplay, PropertyDisplay } from '@components';
import { Card, Flex } from '@radix-ui/themes';
import { useGetUserProfile } from '../hooks/queries/useGetUserProfile';
import { useNavigate } from 'react-router-dom';

export const Profile: React.FC = () => {
  const { user } = useAuth0();
  const { data: profileData, isError } = useGetUserProfile(user?.sub);
  const navigate = useNavigate();

  // If there is no user data associated with this user ID, then make them
  // complete the profile form
  if ((profileData && 'error' in profileData) || isError) {
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
