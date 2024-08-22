import { Link, useParams } from 'react-router-dom';

import { Button, Card, Flex } from '@radix-ui/themes';

import { AddressDisplay } from '@components';
import { useGetProperty } from '@hooks/queries/currentUser/useGetProperty';
import { LandownerAssessmentRequestTable } from '../components/LandownerAssessmentRequestTable';
import { RequestAssessmentButton } from '../components/RequestAssessmentButton';

export const LandownerPropertyInfo = () => {
  const { propertyId } = useParams();
  const { data: property } = useGetProperty(Number(propertyId));

  return (
    <Card>
      <Flex direction="column" gap="2">
        <AddressDisplay data={property} />
        <RequestAssessmentButton property={property} />
        <Link to={`/update-property/${property?.id}`}>
          <Button>Edit</Button>
        </Link>
        <LandownerAssessmentRequestTable propertyId={Number(propertyId)} />
      </Flex>
    </Card>
  );
};
