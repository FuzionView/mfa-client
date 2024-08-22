import { useParams } from 'react-router-dom';

import { Card, Flex } from '@radix-ui/themes';

import { AddressDisplay, LandownerContactInformation } from '@components';
import { useGetProperty } from '@hooks/queries/byUserId/useGetProperty';
import { ForesterAssessmentRequestTable } from '../components/ForesterAssessmentRequestTable';

// Should display: property information, owner contact information, assessment request history
export const ForesterPropertyInfo = () => {
  const { propertyId, userId } = useParams();
  const { data: property } = useGetProperty(userId, Number(propertyId));

  return (
    <Card>
      <Flex direction="column" gap="2">
        <LandownerContactInformation userId={userId} />
        <AddressDisplay data={property} />
        <ForesterAssessmentRequestTable userId={userId} propertyId={Number(propertyId)} />
      </Flex>
    </Card>
  );
};
