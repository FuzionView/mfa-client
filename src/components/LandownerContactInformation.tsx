import { Box, Flex, Heading } from '@radix-ui/themes';

import { useGetUserContactInfo } from '@hooks/queries/byUserId/useGetUserContactInfo';

interface Props {
  userId?: string;
}

/** For forester / admins to view contact information (just email + phone) */
export const LandownerContactInformation: React.FC<Props> = ({ userId }) => {
  const { data } = useGetUserContactInfo(userId);

  return (
    <Flex gap="2" direction="column">
      <Heading>Contact Information</Heading>
      <Flex direction="column" gap="0">
        <Box>
          {data?.first_name} {data?.last_name}
        </Box>
        <Box>{data?.email}</Box>
        <Box>{data?.phone}</Box>
        <Box>{data?.phone_2}</Box>
      </Flex>
    </Flex>
  );
};
