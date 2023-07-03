import { Paper, Title, Button, Stack, PasswordInput } from "@mantine/core";
import Colors from "../../utils/Colors";
import { useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function ChangePassword() {
  const currPasswordRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !currPasswordRef.current.value ||
      !passwordRef.current.value ||
      !passwordConfirmRef.current.value
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

    setLoading(true);
    let formData = new FormData();
    formData.append("currentPassword", currPasswordRef.current.value);
    formData.append("password", passwordRef.current.value);
    formData.append("passwordConfirm", passwordConfirmRef.current.value);

    axios
      .patch(`${import.meta.env.VITE_BACKEND_URL}/api/users/updatePassword`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setLoading(false);
        toast.success("Password Updated Successfully");
        navigate("/login");
        localStorage.clear();
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
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack>
        <Title align="center" c={Colors.red}>
          Ghazlani Enterprise
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
          <Title align="center" c={Colors.white} py={"md"}>
            Change Password
          </Title>
          <form>
            <Stack spacing={"xl"}>
              <PasswordInput
                label="Enter Old Password"
                size="md"
                styles={{
                  label: {
                    color: Colors.white,
                    fontSize: "1.2rem",
                  },
                }}
                ref={currPasswordRef}
              />
              <PasswordInput
                label="Enter New Password"
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
                label="Confirm New Password"
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
              Update Password
            </Button>
          </form>
        </Paper>
      </Stack>
    </div>
  );
}
