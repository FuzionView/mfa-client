import { Flex } from '@radix-ui/themes';
import { TextFormField } from './TextFormField';
import { BooleanFormField } from './BooleanFormField';
import { useCreatePropertyForm } from '../hooks/useCreatePropertyForm';
import { Property } from '@types';

interface Props {
  form: ReturnType<typeof useCreatePropertyForm>;
}

export const PropertyForm: React.FC<Props> = ({ form }) => {
  return (
    <Flex direction="column" gap="2" width={{ initial: 'auto', md: '400px' }}>
      <TextFormField<Property> form={form} label="Address" field="address_1" />
      <TextFormField<Property> form={form} label="Address Line 2" field="address_2" />
      <TextFormField<Property> form={form} label="City" field="city" />
      <TextFormField<Property> form={form} label="State" field="state" />
      <TextFormField<Property> form={form} label="Zip" field="zip" />
      <TextFormField<Property> form={form} label="Section" field="section" />
      <TextFormField<Property> form={form} label="Township" field="township" />
      <TextFormField<Property> form={form} label="Range" field="range" />
      <TextFormField<Property> form={form} label="County" field="county" />
      <TextFormField<Property> form={form} label="Parcel ID" field="parcel_id" />
      <TextFormField<Property>
        form={form}
        label="Estimated Total Acres"
        field="estimated_total_acres"
      />
      <TextFormField<Property> form={form} label="Comments" field="comments" />
      <BooleanFormField<Property>
        form={form}
        label="Current stewardship plan?"
        field="current_stewardship_plan"
      />
      <TextFormField<Property> form={form} label="Plan Date" field="plan_date" />
    </Flex>
  );
};
