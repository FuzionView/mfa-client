import { Callout, Flex } from '@radix-ui/themes';

import { LoadingSpinner } from './LoadingSpinner/LoadingSpinner';

interface Props {
  text: string;
}

export const LoadingCallout = ({ text }: Props) => (
    <Callout.Root color="gray">
      <Flex gap="2" align="center">
        <LoadingSpinner style={{ height: 'var(--font-size-5)', width: 'var(--font-size-5)' }} />
        {text}
      </Flex>
    </Callout.Root>
  );
