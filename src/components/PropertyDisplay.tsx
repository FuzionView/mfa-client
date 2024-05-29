import { Box, Button, Callout, Flex } from '@radix-ui/themes';
import { useGetProperties } from '../hooks/useGetProperties';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

export const PropertyDisplay: React.FC = () => {
  const { user } = useAuth0();
  const { data: propertyData, isError } = useGetProperties(user?.sub);

  console.log('propertyData', propertyData);

  if (isError) {
    return <Callout.Root color="red">Error retrieving property information</Callout.Root>;
  }

  return (
    <Flex direction="column" gap="2">
      <Box>
        {propertyData?.length ? (
          JSON.stringify(propertyData)
        ) : (
          <Callout.Root>Add a property to CBYC!</Callout.Root>
        )}
      </Box>
      <Flex justify="end">
        <Link to="/create-property">
          <Button>Add new property</Button>
        </Link>
      </Flex>
    </Flex>
  );
};
