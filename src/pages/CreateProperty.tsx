import { Flex, Button, Card } from '@radix-ui/themes';
import { useCreatePropertyForm } from '../hooks/useCreatePropertyForm';
import { PropertyForm } from '@components';

export const CreateProperty: React.FC = () => {
  const { form, onSubmit, isSubmitPending } = useCreatePropertyForm();

  return (
    <Flex direction={'column'} gap="3">
      <form onSubmit={onSubmit}>
        <Flex direction="column" gap="3">
          <Card>
            <PropertyForm form={form} />
          </Card>
          <Button type="submit" style={{ alignSelf: 'flex-end' }} loading={isSubmitPending}>
            Save
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};
