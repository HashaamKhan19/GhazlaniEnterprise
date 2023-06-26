import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Button,
  Stack,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import Colors from "../../../utils/Colors";
import axios from "axios";
import { AuthContext } from "../../../context/authContext";

export default function AdminLogin() {
  const navigate = useNavigate();

  const { setUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
          role: "admin",
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
        navigate("/admin");
        setLoading(false);
      } else {
        setError(response.data.message);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
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
        <Paper
          p={"xl"}
          mt={"xl"}
          radius="lg"
          bg={Colors.primary}
          style={{
            width: "100%",
          }}
        >
          <Title align="center" c={Colors.white} py={"lg"}>
            Admin Sign in
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
