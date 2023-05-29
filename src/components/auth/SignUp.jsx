import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Group,
  Button,
  Stack,
} from "@mantine/core";
import Colors from "../../utils/Colors";

export default function SignUp() {
  return (
    <div
      style={{
        backgroundColor: Colors.main,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack>
        <Title align="center" c={Colors.white}>
          Welcome to
          <Text c={Colors.red}>Ghazlani Enterprise</Text>
        </Title>

        <Paper
          p={"xl"}
          mt={"xl"}
          radius="lg"
          bg={Colors.primary}
          style={{
            width: "420px",
            height: "auto",
          }}
        >
          <Title align="center" c={Colors.white} py={"xs"}>
            Sign Up
          </Title>
          <form>
            <Stack spacing={"xl"}>
              <TextInput
                label="Email"
                placeholder="hello@gmail.com"
                size="md"
                styles={{
                  label: {
                    color: Colors.white,
                    fontSize: "1.2rem",
                  },
                }}
              />
              <PasswordInput
                label="Password"
                placeholder="Your password"
                size="md"
                styles={{
                  label: {
                    color: Colors.white,
                    fontSize: "1.2rem",
                  },
                }}
              />
              <PasswordInput
                label="Confirm Password"
                placeholder="Your password"
                size="md"
                styles={{
                  label: {
                    color: Colors.white,
                    fontSize: "1.2rem",
                  },
                }}
              />
            </Stack>

            <Group position="apart" mt="lg">
              <Text color="dimmed" size="lg" align="center" mt={5}>
                Already have an account?{" "}
                <Anchor
                  href="#"
                  size="lg"
                  style={{ color: Colors.secondary, textDecoration: "none" }}
                >
                  sign in here
                </Anchor>
              </Text>
            </Group>
            <Button
              fullWidth
              mt="xl"
              style={{
                backgroundColor: Colors.secondary,
                color: Colors.white,
              }}
              type="submit"
            >
              Register
            </Button>
          </form>
        </Paper>
      </Stack>
    </div>
  );
}
