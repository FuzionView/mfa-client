import { CrossCircledIcon } from '@radix-ui/react-icons';
import { Callout } from '@radix-ui/themes';

interface Props {
  error: Error;
  title: string;
}

export const ErrorCallout: React.FC<Props> = ({ error, title }) => (
  <Callout.Root color="red">
    <Callout.Icon>
      <CrossCircledIcon />
    </Callout.Icon>
    <Callout.Text>
      <strong>{title}</strong>
    </Callout.Text>
    <Callout.Text>{error.message}</Callout.Text>
  </Callout.Root>
);
