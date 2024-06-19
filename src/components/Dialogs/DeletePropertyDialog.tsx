import { useNavigate } from 'react-router-dom';
import { Button } from '@radix-ui/themes';

import { useDeleteProperty } from '../../hooks/queries/useDeleteProperty';
import { useStore } from '../../store';
import { AlertDialog } from '../AlertDialog';

interface Props {
  userId?: string;
  propertyId: number;
}

export const DeletePropertyDialog: React.FC<Props> = ({ userId, propertyId }) => {
  const addToast = useStore((state) => state.addToast);
  const navigate = useNavigate();

  const { mutate: deleteProperty } = useDeleteProperty({
    onError: (error) => {
      addToast({
        intent: 'error',
        message: error?.message,
        title: 'Error removing property',
      });
    },
    onSuccess: () => {
      addToast({
        intent: 'success',
        message: 'Property removed',
        title: 'Success!',
      });
      navigate('/profile');
    },
  });

  const handleConfirm = () => {
    // @ts-expect-error this is fine
    deleteProperty({ propertyId, userId });
  };

  // noop
  const handleCancel = () => {};

  return (
    <AlertDialog
      title="Delete Property"
      trigger={<Button color="red">Delete</Button>}
      description="Do you want to delete this property?"
      onConfirm={handleConfirm}
      onCancel={handleCancel}
    />
  );
};
