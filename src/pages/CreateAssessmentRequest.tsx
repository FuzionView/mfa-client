import { Button, Card, Flex } from '@radix-ui/themes';
import React from 'react';
import { useAssessmentRequestForm } from '../hooks/forms/useAssessmentRequestForm';
import { TextFormField } from '../components/FormFields/TextFormField';
import { Link, useParams } from 'react-router-dom';
import { AssessmentContactMethod, AssessmentRequest } from 'mfa-server/src/types';
import { SelectFormField } from '../components/FormFields/SelectFormField';
import { MultiSelectFormField } from '../components/FormFields/MultiSelectFormField';

interface Props {}

export const CreateAssessmentRequest: React.FC<Props> = () => {
  const { propertyId } = useParams();
  const { form, onSubmit, isSubmitPending } = useAssessmentRequestForm(Number(propertyId));

  const contactMethodOptions = [
    {
      label: 'Email',
      value: AssessmentContactMethod.Email,
    },
    {
      label: 'Phone',
      value: AssessmentContactMethod.Phone,
    },
  ];

  const availabilityOptions = [
    {
      label: 'Morning',
      value: 'morning',
    },
    {
      label: 'Midday',
      value: 'midday',
    },
    {
      label: 'Evening',
      value: 'evening',
    },
  ];

  return (
    <form onSubmit={onSubmit}>
      <Flex direction="column" gap="2">
        <Card>
          <Flex direction="column" gap="1">
            <TextFormField<AssessmentRequest> form={form} label="Notes" field="notes" isOptional />
            <SelectFormField<AssessmentRequest>
              form={form}
              label="Preferred Contact Method"
              field="contact_method"
              options={contactMethodOptions}
            />
            <MultiSelectFormField<AssessmentRequest>
              form={form}
              label="Availability"
              field={'availability'}
              options={availabilityOptions}
            />
          </Flex>
        </Card>
        <Flex gap="1" justify="end">
          <Link to="/profile">
            <Button loading={isSubmitPending} color="gray" variant="outline">
              Cancel
            </Button>
          </Link>
          <Button type="submit" loading={isSubmitPending}>
            Submit
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};
