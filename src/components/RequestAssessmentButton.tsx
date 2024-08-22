import { Link } from 'react-router-dom';

import { Button } from '@radix-ui/themes';

import { AssessmentRequestStatus, PropertyWithIdAndStatus } from '@types';

interface Props {
  property?: PropertyWithIdAndStatus;
}

export const RequestAssessmentButton = ({ property }: Props) => {
  if (!property) return null;

  if (property.request_status === AssessmentRequestStatus.Requested) {
    return <Button disabled>Assessment requested</Button>;
  }

  return (
    <Link to={`/request-assessment/${property.id}`}>
      <Button variant="outline">Request assessment</Button>
    </Link>
  );
};
