import { ReloadIcon } from '@radix-ui/react-icons';

import './LoadingSpinner.scss';

type Props = Record<string, any>;

export const LoadingSpinner = (props: Props) => <ReloadIcon className="loading-spinner" {...props} />;
