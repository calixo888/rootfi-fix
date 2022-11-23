import { Center, Grid, Group, PasswordInput, Space, Stack, TextInput } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

export default function Login() {
  const width = useViewportSize().width;

  return (
    <>
      <Grid>
        {width > 900 && (
          <Grid.Col span={6}>
            <TextInput label="Email" placeholder="Enter your email" />
            <PasswordInput label="Password" placeholder="Enter your password" />
          </Grid.Col>
        )}
        <Grid.Col span={width ? 6 : 12}>
          <Center>
            <Stack>
              <Group>
                <TextInput label="First Name" placeholder="Enter your first name" />
                <TextInput label="Last Name" placeholder="Enter your last name" />
              </Group>
              <Group>
                <TextInput label="Phone Number" placeholder="Enter your phone number" />
                <TextInput label="Email" placeholder="Enter your email" />
              </Group>
            </Stack>
          </Center>
        </Grid.Col>
      </Grid>
    </>
  );
}
