import { Button, Flex, Text, Switch, TextField, Card } from '@radix-ui/themes';
import { useProfileForm } from '../../hooks/useProfileForm';
import { UserProfile } from '@types';

export const ProfileForm: React.FC = () => {
  const form = useProfileForm();

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    form.setField(name as keyof UserProfile, value);
  };

  const handleBooleanValue = (name: keyof UserProfile, checked: boolean) => {
    form.setField(name as keyof UserProfile, checked);
  };

  return (
    <Card>
      <Flex direction="column" gap="2" width={{ initial: 'auto', md: '400px' }}>
        <Text>First Name</Text>
        <TextField.Root
          placeholder="First Name"
          name="first_name"
          value={form.first_name}
          onChange={handleInputValue}
        />
        <Text>Last Name</Text>
        <TextField.Root
          placeholder="Last Name"
          name="last_name"
          value={form.last_name}
          onChange={handleInputValue}
        />
        <Text>Email</Text>
        <TextField.Root
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleInputValue}
          type="email"
        />
        <Text>Primary Phone</Text>
        <TextField.Root
          placeholder="Phone"
          name="phone"
          value={form.phone}
          type="tel"
          onChange={handleInputValue}
        />
        <Text>Secondary Phone (optional)</Text>
        <TextField.Root
          placeholder="Secondary Phone"
          name="phone_2"
          value={form.phone_2}
          type="tel"
          onChange={handleInputValue}
        />
        <Text>Mailing Address</Text>
        <TextField.Root
          placeholder="Address"
          name="address"
          value={form.address}
          onChange={handleInputValue}
        />
        <Text>Address Line 2 (optional)</Text>
        <TextField.Root
          placeholder="Address Line 2"
          name="address_2"
          value={form.address_2}
          onChange={handleInputValue}
        />
        <Text>City</Text>
        <TextField.Root
          placeholder="City"
          name="city"
          value={form.city}
          onChange={handleInputValue}
        />
        <Text>State</Text>
        <TextField.Root
          placeholder="State"
          name="state"
          value={form.state}
          onChange={handleInputValue}
        />
        <Text>Zip</Text>
        <TextField.Root placeholder="Zip" name="zip" value={form.zip} onChange={handleInputValue} />
        {form.user_type === 'forester' && (
          <>
            <Text>Business Name</Text>
            <TextField.Root
              placeholder="Business name"
              name="business_name"
              value={form.business_name}
              onChange={handleInputValue}
            />
          </>
        )}
        <Text>MFA Member?</Text>
        <Switch
          name="mfa_member"
          checked={form.mfa_member}
          onCheckedChange={(checked) => handleBooleanValue('mfa_member', checked)}
        />
        <Text>Join the Mailing List?</Text>
        <Switch
          name="mailing_list"
          checked={form.mailing_list}
          onCheckedChange={(checked) => handleBooleanValue('mailing_list', checked)}
        />
        <Button style={{ alignSelf: 'flex-end' }}>Save</Button>
      </Flex>
    </Card>
  );
};
