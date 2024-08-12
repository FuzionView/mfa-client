import { Link } from 'react-router-dom';

import { Button, Card, Flex } from '@radix-ui/themes';

import { PropertyForm } from '@components';
import { useCreatePropertyForm } from '@hooks/forms/useCreatePropertyForm';

export const CreateProperty: React.FC = () => {
  const { form, onSubmit, isSubmitPending } = useCreatePropertyForm();

  return (
    <Flex direction={'column'} gap="3">
      <form onSubmit={onSubmit}>
        <Flex direction="column" gap="3">
          <Card>
            <PropertyForm form={form} />
          </Card>
          <Flex style={{ alignSelf: 'flex-end' }} gap="1">
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
    </Flex>
  );
};
