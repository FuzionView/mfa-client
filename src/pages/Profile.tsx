import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LogoutButton } from '@components';
import { Box, Card, Flex, Heading } from '@radix-ui/themes';
import { useGetUserProfile } from '../hooks/users';
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
        <Flex gap="1" direction="column">
          <Box>
            {profileData?.first_name} {profileData?.last_name}
          </Box>
          <Box>{profileData?.address}</Box>
          {profileData?.address_2 && <Box>{profileData?.address_2}</Box>}
          <Box>
            {profileData?.city}, {profileData?.state} {profileData?.zip}
          </Box>
        </Flex>
      </Card>
      <LogoutButton />
    </Flex>
  );
};
