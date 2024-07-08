import { Card } from '@radix-ui/themes';

import { LandownerPropertyDisplay } from './LandownerPropertyDisplay';
import { UserInfoDisplay } from './UserInfoDisplay';

export const LandownerProfile: React.FC = () => (
  <>
    <Card>
      <UserInfoDisplay />
    </Card>
    <Card>
      <LandownerPropertyDisplay />
    </Card>
  </>
);
