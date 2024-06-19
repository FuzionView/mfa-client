import { ReloadIcon } from '@radix-ui/react-icons';

import './LoadingSpinner.scss';

type Props = Record<string, unknown>;

export const LoadingSpinner = (props: Props) => (
  <ReloadIcon className="loading-spinner" {...props} />
);
