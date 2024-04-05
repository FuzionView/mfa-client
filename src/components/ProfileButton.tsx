import { Link } from 'react-router-dom';
import { Button } from '@radix-ui/themes';

export const ProfileButton = () => (
  <Link to="/profile">
    <Button size="4">Profile</Button>
  </Link>
);
