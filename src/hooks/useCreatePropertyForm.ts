import { Property, PropertyStatus } from '@types';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { usePersistFormInput } from './usePersistFormInput';
import { useMemo } from 'react';
import { PropertySchema } from 'mfa-server/src/schemas/PropertySchema';

const DEFAULT_VALUES: Partial<Property> = {
  status: PropertyStatus.New,
};

export const useCreatePropertyForm = () => {
  const { getSavedInput, saveInput } = usePersistFormInput('property-form');

  const defaultValues = useMemo(
    () => ({
      ...DEFAULT_VALUES,
      ...getSavedInput(),
    }),
    [getSavedInput],
  );

  const form = useForm<Property>({
    defaultValues,
    resolver: zodResolver(PropertySchema),
  });

  // Persist
  form.watch((data) => {
    saveInput(data);
  });

  return form;
};
