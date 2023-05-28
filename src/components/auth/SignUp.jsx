import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Divider,
  Stack,
  Radio,
} from "@mantine/core";

export default function SignUp() {
  return (
    <Container size={420} my={40}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 700,
        })}
      >
        Get Started With Us!
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Already have an account?{" "}
        {/* <Link style={{ textDecoration: 'none' }} to="/login"> */}
        <Anchor
          href="/login"
          size="sm"
          style={{ color: "#D92228", textDecoration: "none" }}
        >
          Login here
        </Anchor>
        {/* </Link> */}
      </Text>

      <Paper
        withBorder
        shadow="md"
        p={30}
        mt={30}
        radius="md"
        style={{ borderColor: "lightgrey" }}
      >
        <form>
          <Stack spacing={"xl"}>
            <TextInput label="Username" placeholder="Tehseen Riaz" />
            <TextInput label="Email" placeholder="hello@gmail.com" />
            <PasswordInput label="Password" placeholder="Your password" />
            <PasswordInput
              label="Confirm Password"
              placeholder="Your password"
            />
          </Stack>

          <Button fullWidth mt="xl" color="red" type="submit">
            Sign Up
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
