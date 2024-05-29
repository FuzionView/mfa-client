import { Flex, Button, Card } from '@radix-ui/themes';
import { Property } from '@types';
import { useAuth0 } from '@auth0/auth0-react';
import { useStore } from '../store';
import { useNavigate } from 'react-router-dom';
import { useCreateProperty } from '../hooks/useCreateProperty';
import { useCreatePropertyForm } from '../hooks/useCreatePropertyForm';
import { PropertyForm } from '@components';

export const CreateProperty: React.FC = () => {
  const { user } = useAuth0();
  const navigate = useNavigate();
  const addToast = useStore((state) => state.addToast);
  const form = useCreatePropertyForm();

  const { mutate, isPending } = useCreateProperty({
    onSuccess: () => {
      addToast({
        title: 'Success!',
        message: 'Successfully added your property!',
        intent: 'success',
      });
      navigate('/profile');
    },
    onError: (error) => {
      addToast({
        title: 'Error adding your property',
        message: error?.message,
        intent: 'error',
      });
    },
  });

  const handleSubmit = (property: Property) => {
    // @ts-expect-error this is fine
    mutate({ userId: user.sub, property });
  };

  return (
    <Flex direction={'column'} gap="3">
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Flex direction="column" gap="3">
          <Card>
            <PropertyForm form={form} />
          </Card>
          <Button type="submit" style={{ alignSelf: 'flex-end' }} loading={isPending}>
            Save
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};
