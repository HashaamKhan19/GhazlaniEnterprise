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
  Modal,
  Stack,
} from "@mantine/core";

export default function Login() {
  return (
    <Container size={420} my={40}>
      <Title align="center">Welcome back!</Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Do not have an account yet?{" "}
        {/* <Link style={{ textDecoration: 'none' }} to="/register"> */}
        <Anchor
          href="#"
          size="sm"
          style={{ color: "#D92228", textDecoration: "none" }}
        >
          Create account
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
            <TextInput label="Email" placeholder="hello@gmail.com" />
            <PasswordInput label="Password" placeholder="Your password" />
          </Stack>

          <Group position="apart" mt="lg">
            <Anchor
              // onClick={() => {
              //   navigate('/forgotPassword')
              // }}
              href="#"
              size="sm"
              style={{ color: "#D92228", textDecoration: "none" }}
            >
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl" color="red" type="submit">
            Sign in
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
