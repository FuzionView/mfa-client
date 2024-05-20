import * as Form from '@radix-ui/react-form';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  RadioCards,
  Text,
  Switch,
  TextField,
} from '@radix-ui/themes';

export const ProfileForm = () => {
  const inputStyle = { width: '320px' };
  return (
    <Container>
      <Heading size="9">Complete your profile</Heading>
      <Form.Root>
        <Flex direction={'column'} gap="2">
          <Form.Field name="user_type">
            <Form.Label>I am a...</Form.Label>
            <RadioCards.Root defaultValue="landowner" columns={{ initial: '1', sm: '3' }}>
              <RadioCards.Item value="landowner">
                <Flex direction="column">
                  <Text size="4">Landowner</Text>
                  <Text>I own one or more properties that I'd like to register with CBYC</Text>
                </Flex>
              </RadioCards.Item>
              <RadioCards.Item value="forester">
                <Flex direction="column">
                  <Text size="4">Forester</Text>
                  <Text>I own a business related to forest management</Text>
                </Flex>
              </RadioCards.Item>
            </RadioCards.Root>
          </Form.Field>
          <Form.Field name="first_name">
            <Form.Label>First Name</Form.Label>
            <Form.Control asChild>
              <TextField.Root placeholder="First Name" style={inputStyle} />
            </Form.Control>
          </Form.Field>
          <Form.Field name="last_name">
            <Form.Label>Last Name</Form.Label>
            <Form.Control asChild>
              <TextField.Root placeholder="Last Name" style={inputStyle} />
            </Form.Control>
          </Form.Field>
          <Form.Field name="email">
            <Form.Label>Email</Form.Label>
            <Form.Control asChild>
              <TextField.Root placeholder="Email" style={inputStyle} />
            </Form.Control>
          </Form.Field>
          <Form.Field name="phone">
            <Form.Label>Primary Phone</Form.Label>
            <Form.Control asChild>
              <TextField.Root placeholder="Phone" style={inputStyle} />
            </Form.Control>
          </Form.Field>
          <Form.Field name="phone_2">
            <Form.Label>Secondary Phone (optional)</Form.Label>
            <Form.Control asChild>
              <TextField.Root placeholder="Secondary Phone" style={inputStyle} />
            </Form.Control>
          </Form.Field>
          <Form.Field name="address">
            <Form.Label>Mailing Address</Form.Label>
            <Form.Control asChild>
              <TextField.Root placeholder="Address" style={inputStyle} />
            </Form.Control>
          </Form.Field>
          <Form.Field name="address_2">
            <Form.Label>Address Line 2 (optional)</Form.Label>
            <Form.Control asChild>
              <TextField.Root placeholder="Address Line 2" style={inputStyle} />
            </Form.Control>
          </Form.Field>
          <Form.Field name="city">
            <Form.Label>City</Form.Label>
            <Form.Control asChild>
              <TextField.Root placeholder="City" style={inputStyle} />
            </Form.Control>
          </Form.Field>
          <Form.Field name="state">
            <Form.Label>State</Form.Label>
            <Form.Control asChild>
              <TextField.Root placeholder="State" style={inputStyle} />
            </Form.Control>
          </Form.Field>
          <Form.Field name="zip">
            <Form.Label>Zip</Form.Label>
            <Form.Control asChild>
              <TextField.Root placeholder="Zip" style={inputStyle} />
            </Form.Control>
          </Form.Field>
          <Form.Field name="mfa_member">
            <Form.Label>MFA Member?</Form.Label>
            <Box>
              <Form.Control asChild>
                <Switch />
              </Form.Control>
            </Box>
          </Form.Field>
          <Form.Field name="mailing_list">
            <Form.Label>Join the Mailing List?</Form.Label>
            <Box>
              <Form.Control asChild>
                <Switch defaultChecked />
              </Form.Control>
            </Box>
          </Form.Field>
          <Form.Field name="business_name">
            <Form.Label>Business Name</Form.Label>
            <Form.Control asChild>
              <TextField.Root placeholder="Business name" style={inputStyle} />
            </Form.Control>
          </Form.Field>
          <Form.Submit asChild>
            <Button>Save</Button>
          </Form.Submit>
        </Flex>
      </Form.Root>
    </Container>
  );
};
