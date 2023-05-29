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
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

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
          Welcome back to
          <Text c={Colors.red}>Ghazlani Enterprise</Text>
        </Title>
        <Text color="dimmed" size="lg" align="center" mt={5}>
          Do not have an account yet?{" "}
          <Anchor
            href="#"
            size="sm"
            style={{ color: Colors.secondary, textDecoration: "none" }}
            onClick={() => {
              navigate("/register");
            }}
          >
            Create account
          </Anchor>
        </Text>

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
            Sign in
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
            </Stack>

            <Group position="apart" mt="lg">
              <Anchor
                // onClick={() => {
                //   navigate('/forgotPassword')
                // }}
                href="#"
                size="sm"
                style={{ color: Colors.secondary, textDecoration: "none" }}
              >
                Forgot password?
              </Anchor>
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
              Sign in
            </Button>
          </form>
        </Paper>
      </Stack>
    </div>
  );
}
