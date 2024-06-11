import { Card, Button, Callout, Flex, Heading, Box } from '@radix-ui/themes';
import { useGetProperties } from '../hooks/queries/useGetProperties';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';
import { PropertyWithId } from '@types';
import { AddressDisplay } from '@components';

interface PropertyInfoProps {
  property: PropertyWithId;
}

const PropertyInfo = ({ property }: PropertyInfoProps) => {
  return (
    <Card
      style={{ display: 'flex', flexDirection: 'column', minWidth: '300px', gap: 'var(--space-2)' }}
    >
      <AddressDisplay data={property} />
      <Box style={{ flex: 1 }} />
      <Flex gap="1" justify="end">
        <Link to={`/request-assessment/${property.id}`}>
          <Button color="gray">Request assessment</Button>
        </Link>
        <Link to={`/update-property/${property.id}`}>
          <Button>Edit</Button>
        </Link>
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
