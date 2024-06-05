import { Button } from '@radix-ui/themes';
import { AlertDialog } from '../AlertDialog';
import { useDeleteProperty } from '../../hooks/queries/useDeleteProperty';
import { useStore } from '../../store';
import { useNavigate } from 'react-router-dom';

interface Props {
  userId?: string;
  propertyId: number;
}

export const DeletePropertyDialog: React.FC<Props> = ({ userId, propertyId }) => {
  const addToast = useStore((state) => state.addToast);
  const navigate = useNavigate();

  const { mutate: deleteProperty } = useDeleteProperty({
    onSuccess: () => {
      addToast({
        title: 'Success!',
        message: 'Property removed',
        intent: 'success',
      });
      navigate('/profile');
    },
    onError: (error) => {
      addToast({
        title: 'Error removing property',
        message: error?.message,
        intent: 'error',
      });
    },
  });

  const handleConfirm = () => {
    // @ts-expect-error this is fine
    deleteProperty({ userId, propertyId });
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
