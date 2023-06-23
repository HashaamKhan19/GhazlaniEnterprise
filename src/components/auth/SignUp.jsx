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
import { useRef, useState, useContext } from "react";
import { AiOutlineWarning } from "react-icons/ai";
import axios from "axios";
import { AuthContext } from "../../context/authContext";

export default function SignUp() {
  const navigate = useNavigate();
  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const [loading, setLoading] = useState(false);

  const auth = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("http://localhost:3000/api/users/signup", {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        passwordConfirm: passwordConfirmRef.current.value,
      })
      .then((res) => {
        console.log(res.data);
        // authcontext login
        auth.login(res.data.data.user, res.data.token);
        auth.setUser(res?.data?.data?.user);
        setLoading(false);
        navigate("/");
      });
  };
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
      <Stack
        style={{
          minWidth: "30%",
        }}
      >
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
            width: "100%",
          }}
        >
          <Title align="center" c={Colors.white} py={"xs"}>
            Sign Up
          </Title>
          <form onSubmit={handleSubmit}>
            <Stack spacing={"xl"}>
              <TextInput
                label="Name"
                placeholder="john doe"
                size="md"
                styles={{
                  label: {
                    color: Colors.white,
                    fontSize: "1.2rem",
                  },
                }}
                ref={nameRef}
              />
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
                ref={emailRef}
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
                ref={passwordRef}
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
                ref={passwordConfirmRef}
              />
            </Stack>

            <Group position="apart" mt="lg">
              <Text color="dimmed" size="lg" align="center" mt={5}>
                Already have an account?{" "}
                <Anchor
                  href="#"
                  size="lg"
                  style={{ color: Colors.secondary, textDecoration: "none" }}
                  onClick={() => {
                    navigate("/login");
                  }}
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
              loading={loading}
              onClick={(e) => {
                e.preventDefault();
                setLoading(true);
                handleSubmit();
              }}
            >
              Register
            </Button>
          </form>
        </Paper>
      </Stack>
    </div>
  );
}
