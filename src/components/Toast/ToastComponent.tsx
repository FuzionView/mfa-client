import * as React from 'react';
import { CrossCircledIcon, InfoCircledIcon } from '@radix-ui/react-icons';
import * as T from '@radix-ui/react-toast';
import { Box, Flex, Text } from '@radix-ui/themes';
import { Toast } from '@types';

interface ToastProps extends Toast {
  className?: string;
}

export const ToastComponent: React.FC<ToastProps> = ({ title, message, id, intent }) => (
  <T.Root key={id} className={`toast root`} data-intent={intent ?? 'info'} duration={20000}>
    <Flex gap="2" align="center">
      <InfoCircledIcon />
      <strong>{title}</strong>
      <Box style={{ flex: 1 }} />
      <T.Close className={`toast close`}>
        <CrossCircledIcon />
      </T.Close>
    </Flex>
    <Text>{message}</Text>
  </T.Root>
);
