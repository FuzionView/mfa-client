import { Card } from '@radix-ui/themes';

import { PropertyDisplay } from './PropertyDisplay';
import { UserInfoDisplay } from './UserInfoDisplay';

export const LandownerProfile: React.FC = () => (
  <>
    <Card>
      <UserInfoDisplay />
    </Card>
    <Card>
      <PropertyDisplay />
    </Card>
  </>
);
