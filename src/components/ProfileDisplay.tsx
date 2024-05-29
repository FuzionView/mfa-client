import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, Callout, Flex } from '@radix-ui/themes';
import { UserProfile } from '@types';
import { Link } from 'react-router-dom';
import { useGetUserProfile } from '../hooks/useGetUserProfile';

interface Props {
  profileData?: UserProfile;
}

export const ProfileDisplay: React.FC<Props> = () => {
  const { user } = useAuth0();
  const { data: profileData, isError } = useGetUserProfile(user?.sub);

  if (isError) {
    return <Callout.Root color="red">Error retrieving profile information</Callout.Root>;
  }

  return (
    <Flex gap="2" direction="column">
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
      <Flex justify="end">
        <Link to="/update-profile">
          <Button>Edit Profile</Button>
        </Link>
      </Flex>
    </Flex>
  );
};
