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
import { useRef, useState } from "react";
import { AiOutlineWarning } from "react-icons/ai";
import axios from "axios";

export default function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  //must contain atleast 1 uppercase, 1 lowercase, 1 digit, 1 special character from the set [@$!%*?&] and must be 8 characters long

  const isValidEmail = emailRegex.test(email);
  const isValidPassword = passwordRegex.test(password);
  const isConfirmPasswordMatched = password === confirmPassword;

  async function handleSubmit() {
    // if (!isValidEmail || !isValidPassword || !isConfirmPasswordMatched) {
    //   if (!isValidEmail) {
    //     notifications.show({
    //       title: "Invalid Email Address",
    //       message: "You have entered invalid email address!",
    //       color: "red",
    //       icon: <AiOutlineWarning size={14} />,
    //       autoClose: 3000,
    //     });
    //   }
    //   if (!isValidPassword) {
    //     notifications.show({
    //       title: "Invalid Password",
    //       message: "You have entered wrong format password!",
    //       color: "red",
    //       icon: <AiOutlineWarning size={14} />,
    //       autoClose: 3000,
    //     });
    //   }
    //   if (!isConfirmPasswordMatched) {
    //     notifications.show({
    //       title: "Password validation failed",
    //       message: "Password and confirm password does not match!",
    //       color: "red",
    //       icon: <AiOutlineWarning size={14} />,
    //       autoClose: 3000,
    //     });
    //   }
    //   return;
    // }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/signup",
        {
          email,
          password,
          confirmPassword,
        }
      );
      if (response?.data?.status === "success") {
        console.log("response: ", response);
        navigate("/login");
        setLoading(false);
      } else {
        // notifications.show({
        //   title: "SignUp failed",
        //   message: "An error occured!",
        //   color: "red",
        //   icon: <AiOutlineWarning size={14} />,
        //   autoClose: 3000,
        // });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

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
                onChange={(e) => {
                  setEmail(e.target.value);
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
                onChange={(e) => {
                  setPassword(e.target.value);
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
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
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
