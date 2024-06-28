import { FieldErrors, FieldValues, Path } from 'react-hook-form';

import { Text } from '@radix-ui/themes';

interface Props<Fields extends FieldValues> {
  error?: FieldErrors<Fields>[Path<Fields>];
}

export function FormError<Fields extends FieldValues>({ error }: Props<Fields>) {
  const message = error?.message;
  if (!message || typeof message !== 'string') return null;

  return (
    <Text color="red" size="1">
      {message}
    </Text>
  );
}
