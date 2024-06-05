import { Flex, Text } from '@radix-ui/themes';

interface Props {
  children: React.ReactNode;
  isOptional?: boolean;
}

export const FormLabel: React.FC<Props> = ({ children, isOptional = false }) => {
  return (
    <Flex gap="1" align="baseline">
      <Text color="gray">
        <strong>{children}</strong>
      </Text>
      <Text size="1" color="gray">
        {isOptional && '(optional)'}
      </Text>
    </Flex>
  );
};
