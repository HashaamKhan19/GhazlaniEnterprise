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
  FileInput,
} from "@mantine/core";
import Colors from "../../utils/Colors";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useContext } from "react";
import { AiOutlineWarning } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function SignUp() {
  const navigate = useNavigate();
  const emailRef = useRef();
  const nameRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [image, setImage] = useState();

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !emailRef.current.value ||
      !passwordRef.current.value ||
      !passwordConfirmRef.current.value ||
      !nameRef.current.value
    ) {
      toast.error("Please fill all fields");
      setLoading(false);
      return;
    }

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      toast.error("Passwords do not match");
      setLoading(false);
      return;
    }

    if (passwordRef.current.value.length < 8) {
      toast.error("Password must be at least 8 characters");
      setLoading(false);
      return;
    }

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!emailRegex.test(emailRef.current.value)) {
      toast.error("Please enter a valid email");
      setLoading(false);
      return;
    }

    if (!image) {
      toast.error("Please upload an image");
      setLoading(false);
      return;
    }

    setLoading(true);
    let formData = new FormData();
    formData.append("name", nameRef.current.value);
    formData.append("email", emailRef.current.value);
    formData.append("password", passwordRef.current.value);
    formData.append("passwordConfirm", passwordConfirmRef.current.value);
    formData.append("image", image);

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/users/signup`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setLoading(false);
        toast.success("Account created successfully");
        navigate("/login");
      })
      .catch((err) => {
        setLoading(false);
        toast.error(err.response.data.message);
      });
  };
  return (
    <div
      style={{
        backgroundColor: Colors.main,
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "2rem",
        paddingBottom: "2rem",
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
              <FileInput
                label="Upload Image"
                placeholder="Upload Image"
                accept="image/png,image/jpeg"
                styles={{
                  label: {
                    color: Colors.white,
                    fontSize: "1.2rem",
                  },
                }}
                onChange={setImage}
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
                setLoading(true);
                handleSubmit(e);
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
