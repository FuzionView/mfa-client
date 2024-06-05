import { Flex } from '@radix-ui/themes';
import { TextFormField } from './FormFields/TextFormField';
import { BooleanFormField } from './FormFields/BooleanFormField';
import { InputType, Property, PropertyAddressType } from '@types';
import { RadioCardFormField } from './FormFields/RadioCardFormField';
import { UseFormReturn } from 'react-hook-form';

const addressTypeOptions = [
  {
    label: 'Street Address',
    value: 'street',
    description: 'My property has a street address',
  },
  {
    label: 'Township, Range, Section (PLSS)',
    value: 'plss',
    description: 'My property location is described using township, range, and section ',
  },
];

interface Props {
  form: UseFormReturn<Property>;
}

export const PropertyForm: React.FC<Props> = ({ form }) => {
  // TODO: make sure that when this changes, clear previous address information
  const addressType = form.watch('address_type');

  return (
    <Flex direction="column" gap="2">
      <RadioCardFormField
        form={form}
        label="Property address type"
        field="address_type"
        options={addressTypeOptions}
      />
      {addressType && (
        <Flex direction="column" gap="2">
          {addressType === PropertyAddressType.Street && (
            <>
              <TextFormField<Property> form={form} label="Address" field="address" />
              <TextFormField<Property>
                form={form}
                label="Address Line 2"
                field="address_2"
                isOptional
              />
              <TextFormField<Property> form={form} label="City" field="city" />
              <TextFormField<Property> form={form} label="State" field="state" />
              <TextFormField<Property> form={form} label="Zip" field="zip" />
            </>
          )}
          {addressType === PropertyAddressType.PLSS && (
            <>
              <TextFormField<Property> form={form} label="Township" field="township" />
              <TextFormField<Property> form={form} label="Range" field="range" />
              <TextFormField<Property> form={form} label="Section" field="section" />
              <TextFormField<Property> form={form} label="County" field="county" />
              <TextFormField<Property> form={form} label="State" field="state" />
            </>
          )}
          <TextFormField<Property> form={form} label="Parcel ID" field="parcel_id" isOptional />
          <TextFormField<Property>
            form={form}
            label="Estimated Total Acres"
            field="estimated_total_acres"
            inputType={InputType.Number}
          />
          <TextFormField<Property> form={form} label="Comments" field="comments" isOptional />
          <BooleanFormField<Property>
            form={form}
            label="Current stewardship plan?"
            field="current_stewardship_plan"
          />
          <TextFormField<Property>
            form={form}
            label="Plan Date"
            field="plan_date"
            inputType={InputType.Date}
            isOptional
          />
        </Flex>
      )}
    </Flex>
  );
};
