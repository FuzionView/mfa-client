import { Box, Card, Button, Callout, Flex, Heading } from '@radix-ui/themes';
import { useGetProperties } from '../hooks/useGetProperties';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { PropertyWithId, PropertyAddressType } from '@types';

interface PropertyInfoProps {
  property: PropertyWithId;
}

const Address = ({ property }: { property: PropertyWithId }) => {
  if (property.address_type === PropertyAddressType.Street) {
    return (
      <Flex direction="column" gap="1">
        <Box>
          <strong>{property.address}</strong>
        </Box>
        <Box>{`${property.city}, ${property.state} ${property.zip}`}</Box>
      </Flex>
    );
  } else {
    return (
      <Flex direction="column" gap="1">
        <Box>
          <strong>Township </strong> {property.township}
        </Box>
        <Box>
          <strong>Range </strong> {property.range}
        </Box>
        <Box>
          <strong>Section </strong> {property.section}
        </Box>
        <Box>
          <strong>County </strong> {property.county}
        </Box>
        <Box>
          <strong>State </strong> {property.state}
        </Box>
      </Flex>
    );
  }
};

const PropertyInfo = ({ property }: PropertyInfoProps) => {
  const link = `/update-property/${property.id}`;
  return (
    <Card>
      <Flex direction="column" gap="2">
        <Address property={property} />
        <Flex gap="1" justify="end">
          <Link to={link}>
            <Button>Edit</Button>
          </Link>
        </Flex>
      </Flex>
    </Card>
  );
};

export const PropertyDisplay: React.FC = () => {
  const { user } = useAuth0();
  const { data: propertyData, isError } = useGetProperties(user?.sub);

  if (isError) {
    return <Callout.Root color="red">Error retrieving property information</Callout.Root>;
  }

  return (
    <Flex direction="column" gap="2">
      <Heading size="7">Properties</Heading>
      {!!propertyData?.length && (
        <Flex>
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
