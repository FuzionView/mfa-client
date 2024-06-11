import { Button, Flex } from '@radix-ui/themes';
import React from 'react';
import { useAssessmentRequestForm } from '../hooks/forms/useAssessmentRequestForm';
import { TextFormField } from '../components/FormFields/TextFormField';
import { Link, useParams } from 'react-router-dom';

interface Props {}

export const CreateAssessmentRequest: React.FC<Props> = () => {
  const { propertyId } = useParams();
  const { form, onSubmit, isSubmitPending } = useAssessmentRequestForm(Number(propertyId));

  return (
    <form onSubmit={onSubmit}>
      <Flex direction="column" gap="2">
        <Flex direction="column" gap="1">
          <TextFormField form={form} label="Notes" field="notes" isOptional />
          <TextFormField form={form} label="Contact Method" field="contact_method" isOptional />
          <TextFormField form={form} label="Availability" field="availability" isOptional />
        </Flex>
        <Flex gap="1" justify="end">
          <Link to="/profile">
            <Button loading={isSubmitPending} color="gray" variant="outline">
              Cancel
            </Button>
          </Link>
          <Button type="submit" loading={isSubmitPending}>
            Save
          </Button>
        </Flex>
      </Flex>
    </form>
  );
};
