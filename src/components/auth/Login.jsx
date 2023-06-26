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
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { toast } from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { setUser } = useContext(AuthContext);

  async function handleSubmit() {
    if (!email || !password) {
      setError("Please fill all the fields");
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        {
          email,
          password,
        }
      );

      console.log(response);

      if (response?.data?.status === "success") {
        console.log("response: ", response);
        localStorage.setItem("token", response?.data?.token);
        localStorage.setItem("userType", response?.data?.data?.user?.role);
        localStorage.setItem("id", response?.data?.data?.user?._id);
        localStorage.setItem("username", response?.data?.data?.user?.name);
        localStorage.setItem("email", response?.data?.data?.user?.email);
        setUser(response?.data?.data?.user);
        // login(response?.data?.data?.user, response?.data?.token);
        navigate("/");
        toast.success(`Welcome back ${response?.data?.data?.user?.name}!`, {
          position: "top-center",
          icon: "👏",
        });
        setLoading(false);
      } else {
        setError(response.data.message);
        toast.error(response.data.message, {
          position: "top-center",
        });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
      toast.error("Invalid email or password", {
        position: "top-center",
      });

      setLoading(false);
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
            width: "100%",
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
                required
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
                required
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Stack>

            <Group position="apart" mt="lg">
              <Anchor
                onClick={() => {
                  navigate("/resetPassword");
                }}
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
              loading={loading}
              onClick={(e) => {
                e.preventDefault();
                setLoading(true);
                handleSubmit();
              }}
            >
              Sign in
            </Button>
          </form>
        </Paper>
      </Stack>
    </div>
  );
}
