import { format } from 'date-fns';

import { Flex, Heading, Table } from '@radix-ui/themes';

import { AssessmentRequestResponse } from '@types';

interface Props {
  assessmentRequests?: AssessmentRequestResponse[];
}

export const AssessmentRequestTable: React.FC<Props> = ({ assessmentRequests }) => (
  <Flex direction="column" gap="1">
    <Heading>Assessment Request History</Heading>
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Date requested</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Notes</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Preferred contact method</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Availability</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {!!assessmentRequests &&
          assessmentRequests.map(({ date_added, notes, contact_method, availability }) => (
            <Table.Row>
              <Table.Cell>{format(date_added ?? new Date(), 'LLLL d y')}</Table.Cell>
              <Table.Cell>{notes}</Table.Cell>
              <Table.Cell>{contact_method}</Table.Cell>
              <Table.Cell>{availability}</Table.Cell>
            </Table.Row>
          ))}
      </Table.Body>
    </Table.Root>
  </Flex>
);
