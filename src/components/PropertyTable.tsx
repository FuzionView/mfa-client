import { Link } from 'react-router-dom';

import { Button, Flex, Heading, Table } from '@radix-ui/themes';

import { useGetAllProperties } from '@hooks/queries/useGetAllProperties';
import { Address, PropertyAddressType, PropertyWithIdAndStatus } from '@types';

interface RowProps {
  property: PropertyWithIdAndStatus;
}

const getAddressString = (address: Address): string => {
  if (address.address_type === PropertyAddressType.PLSS) {
    return [address.section, address.township, address.range, address.county].join(', ');
  }
  return [address.address, address.address_2, address.city, `${address.state} ${address.zip}`]
    .filter(Boolean)
    .join(', ');
};

const PropertyTableRow: React.FC<RowProps> = ({ property }) => (
  <Table.Row>
    <Table.Cell>{getAddressString(property)}</Table.Cell>
    <Table.Cell>{property.date_requested}</Table.Cell>
    <Table.Cell>{property.request_status}</Table.Cell>
    <Table.Cell>
      <Link to={`/forester-property-info/${property.user_id}/${property.id}`}>
        <Button>View Info</Button>
      </Link>
    </Table.Cell>
  </Table.Row>
);

/** Table that displays a list of properties for Foresters  */
export const PropertyTable = () => {
  // TODO: set up pagination / or use pre-built table
  const { data: properties = [] } = useGetAllProperties(1);

  return (
    <Flex direction="column" gap="1">
      <Heading>Properties</Heading>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Address</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Date requested</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Request Status</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>View Info</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {properties.map((property) => (
            <PropertyTableRow property={property} />
          ))}
        </Table.Body>
      </Table.Root>
    </Flex>
  );
};
