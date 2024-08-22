import { Link, useParams } from 'react-router-dom';

import { Button, Card, Flex } from '@radix-ui/themes';

import { AddressDisplay } from '@components';
import { useGetProperty } from '@hooks/queries/currentUser/useGetProperty';
import { AssessmentRequestInfo } from '../components/AssessmentRequestInfo';
import { LandownerAssessmentRequestTable } from '../components/LandownerAssessmentRequestTable';
import { RequestAssessmentButton } from '../components/RequestAssessmentButton';

export const LandownerPropertyInfo = () => {
  const { propertyId } = useParams();
  const { data: property } = useGetProperty(Number(propertyId));

  return (
    <Card>
      <Flex direction="column" gap="2">
        <AddressDisplay data={property} />
        <AssessmentRequestInfo property={property} />
        <Flex gap="1" justify="end">
          <RequestAssessmentButton property={property} />
          <Link to={`/update-property/${property?.id}`}>
            <Button>Edit Property</Button>
          </Link>
        </Flex>
        <LandownerAssessmentRequestTable propertyId={Number(propertyId)} />
      </Flex>
    </Card>
  );
};
