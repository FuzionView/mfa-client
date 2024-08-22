import { Card } from '@radix-ui/themes';

import { LandownerPropertyList } from './LandownerPropertyList';
import { UserInfoDisplay } from './UserInfoDisplay';

export const LandownerProfile: React.FC = () => (
  <>
    <Card>
      <UserInfoDisplay />
    </Card>
    <Card>
      <LandownerPropertyList />
    </Card>
  </>
);
