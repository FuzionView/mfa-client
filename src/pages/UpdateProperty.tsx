import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import { Box, Button, Card, Flex } from '@radix-ui/themes';

import { PropertyForm } from '@components';
import { DeletePropertyDialog } from '../components/Dialogs/DeletePropertyDialog';
import { useUpdatePropertyForm } from '../hooks/forms/useUpdatePropertyForm';
import { useGetProperty } from '../hooks/queries/currentUser/useGetProperty';

export const UpdateProperty: React.FC = () => {
  const { user } = useAuth0();
  const { propertyId } = useParams();
  const {
    data: propertyData,
    isError,
    isPending: isPropertyLoading,
  } = useGetProperty(user?.sub, Number(propertyId));

  const { form, onSubmit, isSubmitPending } = useUpdatePropertyForm(Number(propertyId));

  useEffect(() => {
    if (propertyData) {
      form.reset(propertyData);
    }
  }, [propertyData]);

  return (
    <Flex direction={'column'} gap="3">
      {!isError && !isPropertyLoading && (
        <form onSubmit={onSubmit}>
          <Flex direction="column" gap="3">
            <Card>
              <PropertyForm form={form} />
            </Card>
            <Flex direction="row" gap="1">
              <DeletePropertyDialog userId={user?.sub} propertyId={Number(propertyId)} />
              <Box style={{ flex: 1 }} />
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
      )}
    </Flex>
  );
};
