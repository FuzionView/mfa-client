import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { LogoutButton } from '@components';
import { Box, Button, Card, Flex } from '@radix-ui/themes';
import { useGetUserProfile } from '../hooks/useGetUserProfile';
import { Link, useNavigate } from 'react-router-dom';

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
          <Box>{profileData?.email}</Box>
          <Box>{profileData?.phone}</Box>
          <Box>{profileData?.phone_2}</Box>
          <Box>{profileData?.mfa_member}</Box>
          <Box>{profileData?.mailing_list}</Box>
          <Flex>
            <Link to="/update-profile">
              <Button>Edit Profile</Button>
            </Link>
          </Flex>
        </Flex>
      </Card>
      <LogoutButton />
    </Flex>
  );
};
