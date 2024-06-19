import { Box, Flex } from '@radix-ui/themes';
import { Address, Property,PropertyAddressType, PropertyWithId } from '@types';

interface Props {
  data: Property | PropertyWithId | Address;
}

export const AddressDisplay: React.FC<Props> = ({ data }) => {
  if (data.address_type === PropertyAddressType.Street) {
    return (
      <Flex direction="column" gap="0">
        <Box>{data.address}</Box>
        <Box>{`${data.city}, ${data.state} ${data.zip}`}</Box>
      </Flex>
    );
  } else {
    return (
      <Flex direction="column" gap="0">
        <Box>
          <strong>Township </strong> {data.township}
        </Box>
        <Box>
          <strong>Range </strong> {data.range}
        </Box>
        <Box>
          <strong>Section </strong> {data.section}
        </Box>
        <Box>
          <strong>County </strong> {data.county}
        </Box>
        <Box>
          <strong>State </strong> {data.state}
        </Box>
      </Flex>
    );
  }
};
