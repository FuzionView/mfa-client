import { useParams } from 'react-router-dom';

import { Box } from '@radix-ui/themes';

import { useGetProperty } from '../hooks/queries/currentUser/useGetProperty';

export const ForesterPropertyInfo = () => {
  const { propertyId, userId } = useParams();
  const { data } = useGetProperty(userId, Number(propertyId));

  console.log(data);

  return <Box>Test</Box>;
};
