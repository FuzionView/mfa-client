import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import { Box, Button, Callout, Card, Flex, Heading } from '@radix-ui/themes';

import { AddressDisplay } from '@components';
import { useGetProperties } from '@hooks/queries/currentUser/useGetProperties';
import { PropertyWithIdAndStatus } from '@types';
import { AssessmentRequestInfo } from './AssessmentRequestInfo';

interface PropertyInfoProps {
  property: PropertyWithIdAndStatus;
}

const PropertyInfo = ({ property }: PropertyInfoProps) => (
  <Card style={{ minWidth: '300px' }}>
    <Flex direction="column" gap="2" style={{ height: '100%' }}>
      <AddressDisplay data={property} />
      <Box style={{ flexGrow: 1 }} />
      <Flex>
        <AssessmentRequestInfo property={property} />
      </Flex>
      <Flex justify="end">
        <Link to={`/property-info/${property.id}`}>
          <Button>View</Button>
        </Link>
      </Flex>
    </Flex>
  </Card>
);

/** Displays a list of properties for a user */
export const LandownerPropertyList: React.FC = () => {
  const { user } = useAuth0();
  const { data: propertyData, isError } = useGetProperties(user?.sub);

  if (isError) {
    return <Callout.Root color="red">Error retrieving property information</Callout.Root>;
  }

  return (
    <Flex direction="column" gap="2">
      <Heading size="7">Properties</Heading>
      {!!propertyData?.length && (
        <Flex gap="1">
          {propertyData.map((property) => (
            <PropertyInfo property={property} key={property.id} />
          ))}
        </Flex>
      )}
      {!propertyData?.length && <Callout.Root>Add a property to CBYC!</Callout.Root>}
      <Flex justify="end">
        <Link to="/create-property">
          <Button>Add new property</Button>
        </Link>
      </Flex>
    </Flex>
  );
};
