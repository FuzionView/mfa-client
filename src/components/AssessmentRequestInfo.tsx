import { formatRelative } from 'date-fns';

import { Box, Callout, Flex } from '@radix-ui/themes';

import { AssessmentRequestStatus, PropertyWithIdAndStatus } from '@types';

interface Props {
  property?: PropertyWithIdAndStatus;
}

/** An alert/ callout / info box explaining when an assessment was last requested for a given property */
export const AssessmentRequestInfo = ({ property }: Props) => {
  if (!property) return null;

  const relativeDate = property.date_requested
    ? formatRelative(new Date(property.date_requested), new Date())
    : '';
  if (property.request_status === AssessmentRequestStatus.Requested) {
    return (
      <Callout.Root size="1" style={{ width: '100%' }}>
        <Flex direction="column">
          <Box>Assessment requested</Box>
          <Box>
            <strong>Request Date: </strong>
            {relativeDate}
          </Box>
        </Flex>
      </Callout.Root>
    );
  }
  if (property.request_status === AssessmentRequestStatus.Expired) {
    return (
      <Callout.Root color="red" size="1" style={{ width: '100%' }}>
        <Flex direction="column">
          <Box>Assessment request expired</Box>
          <Box>
            <strong>Request Date: </strong>
            {relativeDate}
          </Box>
        </Flex>
      </Callout.Root>
    );
  }

  return null;
};
