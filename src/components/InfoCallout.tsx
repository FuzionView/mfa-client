import { InfoCircledIcon } from '@radix-ui/react-icons';
import { Callout } from '@radix-ui/themes';

interface Props {
  description?: string;
  title?: string;
}

export const InfoCallout: React.FC<Props> = ({ description, title }) => (
  <Callout.Root>
    <Callout.Icon>
      <InfoCircledIcon />
    </Callout.Icon>
    {title && (
      <Callout.Text>
        <strong>{title}</strong>
      </Callout.Text>
    )}
    {description && <Callout.Text>{description}</Callout.Text>}
  </Callout.Root>
);
