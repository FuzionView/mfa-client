import { AlertDialog as A, Button, Flex } from '@radix-ui/themes';
import { ReactNode } from 'react';

interface Props {
  title: string;
  trigger: ReactNode;
  description: ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
}

export const AlertDialog: React.FC<Props> = ({
  title,
  trigger,
  description,
  onConfirm,
  onCancel,
}) => {
  return (
    <A.Root>
      <A.Trigger>{trigger}</A.Trigger>
      <A.Content maxWidth="450px">
        <A.Title>{title}</A.Title>
        <A.Description size="2">{description}</A.Description>

        <Flex gap="3" mt="4" justify="end">
          <A.Cancel>
            <Button variant="outline" color="gray" onClick={onCancel}>
              Cancel
            </Button>
          </A.Cancel>
          <A.Action>
            <Button variant="solid" color="red" onClick={onConfirm}>
              Confirm
            </Button>
          </A.Action>
        </Flex>
      </A.Content>
    </A.Root>
  );
};
