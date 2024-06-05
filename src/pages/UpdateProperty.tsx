import { Flex, Card, Button, Box } from '@radix-ui/themes';
import { Property } from '@types';
import { PropertyForm } from '@components';
import { useAuth0 } from '@auth0/auth0-react';
import { useStore } from '../store';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useUpdatePropertyForm } from '../hooks/useUpdatePropertyForm';
import { useGetProperty } from '../hooks/useGetProperty';
import { useUpdateProperty } from '../hooks/useUpdateProperty';
import { SubmitErrorHandler } from 'react-hook-form';
import { DeletePropertyDialog } from '../components/Dialogs/DeletePropertyDialog';

export const UpdateProperty: React.FC = () => {
  const { user } = useAuth0();
  const navigate = useNavigate();
  const addToast = useStore((state) => state.addToast);
  let { propertyId } = useParams();
  const { data: propertyData, isError } = useGetProperty(user?.sub, Number(propertyId));
  const form = useUpdatePropertyForm();

  useEffect(() => {
    if (propertyData) {
      form.reset(propertyData);
    }
  }, [propertyData]);

  const { mutate, isPending } = useUpdateProperty({
    onSuccess: () => {
      addToast({
        title: 'Success!',
        message: 'Successfully updated property!',
        intent: 'success',
      });
      navigate('/profile');
    },
    onError: (error) => {
      addToast({
        title: 'Error updating property',
        message: error?.message,
        intent: 'error',
      });
    },
  });

  const handleSubmit = (data: Property) => {
    // @ts-expect-error this is fine
    mutate({ userId: user.sub, propertyId, property: data });
  };

  const handleError: SubmitErrorHandler<Property> = (error) => {
    console.error('Form error', error);
  };

  return (
    <Flex direction={'column'} gap="3">
      {!isError && (
        <form onSubmit={form.handleSubmit(handleSubmit, handleError)}>
          <Flex direction="column" gap="3">
            <Card>
              <PropertyForm form={form} />
            </Card>
            <Flex direction="row" gap="1">
              <DeletePropertyDialog userId={user?.sub} propertyId={Number(propertyId)} />
              <Box style={{ flex: 1 }} />
              <Link to="/profile">
                <Button loading={isPending} color="gray" variant="outline">
                  Cancel
                </Button>
              </Link>
              <Button type="submit" loading={isPending}>
                Save
              </Button>
            </Flex>
          </Flex>
        </form>
      )}
    </Flex>
  );
};
