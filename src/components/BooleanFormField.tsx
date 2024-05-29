import { Flex, Switch, Text } from '@radix-ui/themes';
import { Controller, FieldValues, Path, useForm } from 'react-hook-form';

interface Props<Fields extends FieldValues> {
  form: ReturnType<typeof useForm<Fields>>;
  label: string;
  field: Path<Fields>;
}
export function BooleanFormField<Fields extends FieldValues>({
  form,
  label,
  field,
}: Props<Fields>) {
  return (
    <Flex direction="column" gap="1">
      <Text>{label}</Text>
      <Controller
        control={form.control}
        name={field}
        render={({ field: { onChange, onBlur, value } }) => {
          const handleChange = (checked: boolean) =>
            onChange({ target: { checked, name: field, type: 'checkbox' } });
          return <Switch checked={!!value} onCheckedChange={handleChange} onBlur={onBlur} />;
        }}
      />
    </Flex>
  );
}
