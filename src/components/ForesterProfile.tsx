import { useAuth0 } from '@auth0/auth0-react';

import { Callout, Card, Flex } from '@radix-ui/themes';

import { useGetUserProfile } from '@hooks/queries/currentUser/useGetUserProfile';
import { ForesterApprovalStatus, UserType } from '@types';
import { PropertyTable } from './PropertyTable';
import { UserInfoDisplay } from './UserInfoDisplay';

export const ForesterProfile: React.FC = () => {
  const { user } = useAuth0();
  const { data: profileData } = useGetUserProfile(user?.sub);

  if (profileData?.user_type === UserType.Landowner) return;
  if (profileData?.forester_approved === ForesterApprovalStatus.Pending) {
    return (
      <Callout.Root>
        You profile is pending review. MFA will verify your information and get back to you shortly!
      </Callout.Root>
    );
  }
  if (profileData?.forester_approved === ForesterApprovalStatus.Denied) {
    return <Callout.Root color="red">Your profile was denied</Callout.Root>;
  }

  return (
    <Card>
      <Flex direction="column" gap="2">
        <UserInfoDisplay />
        {profileData?.forester_approved === ForesterApprovalStatus.Approved && <PropertyTable />}
      </Flex>
    </Card>
  );
};
