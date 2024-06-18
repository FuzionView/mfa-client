import { Flex, Button, Card } from '@radix-ui/themes';
import { useCreatePropertyForm } from '../hooks/forms/useCreatePropertyForm';
import { PropertyForm } from '@components';
import { Link } from 'react-router-dom';

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
