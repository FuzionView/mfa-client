import { Property } from '@types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo } from 'react';
import { PropertySchema } from 'mfa-server/src/schemas/PropertySchema';
import { useAuth0 } from '@auth0/auth0-react';

const DEFAULT_VALUES: Partial<Property> = {
  address_type: undefined,
  address: '',
  address_2: '',
  city: '',
  date_added: new Date(),
  state: '',
  zip: '',
  section: '',
  township: '',
  range: '',
  county: '',
  estimated_total_acres: undefined,
  parcel_id: '',
  comments: '',
  current_stewardship_plan: false,
  plan_date: undefined,
};

export const useUpdatePropertyForm = () => {
  const { user } = useAuth0();

  const defaultValues = useMemo(
    () => ({
      ...DEFAULT_VALUES,
      user_id: user?.sub,
    }),
    [user],
  );

  const form = useForm<Property>({
    defaultValues,
    resolver: zodResolver(PropertySchema),
  });

  return form;
};
