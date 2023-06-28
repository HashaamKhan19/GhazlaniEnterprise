import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Colors from "../../utils/Colors";
import { Button, Grid, SimpleGrid, Stack, TextInput } from "@mantine/core";
import axios from "axios";
import { toast } from "react-hot-toast";

const UserProfileDetails = () => {
  const location = useLocation();
  const { userData } = location.state;

  const [loading, setLoading] = React.useState(false);

  const [name, setName] = React.useState(
    userData?.name || JSON.parse(localStorage.getItem("name"))?.name || null
  );
  const [email, setEmail] = React.useState(
    userData?.email || JSON.parse(localStorage.getItem("email"))?.email || null
  );

  const navigation = useNavigate();

  async function handleUpdate() {
    if (!name || !email) {
      setLoading(false);
      toast.error("Please fill all the fields", {
        position: "top-center",
      });
      return;
    }

    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const isValidEmail = emailRegex.test(email);

    if (!isValidEmail) {
      setLoading(false);
      toast.error("Please enter a valid email", {
        position: "top-center",
      });
      return;
    }

    try {
      const response = await axios.patch(
        `http://localhost:3000/api/users/updateMe`,
        {
          name,
          email,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response?.data?.status === "success") {
        console.log("response: ", response);
        toast.success("Profile updated successfully", {
          position: "top-center",
        });
        localStorage.setItem("name", JSON.stringify({ name }));
        localStorage.setItem("email", JSON.stringify({ email }));
        setLoading(false);
        navigation(-1);
      } else {
        toast.error(response.data.message, {
          position: "top-center",
        });
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message, {
        position: "top-center",
      });
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: Colors.main,
      }}
    >
      <Grid columns={12} mt={"xl"}>
        <SimpleGrid
          cols={2}
          mt="xl"
          breakpoints={[{ maxWidth: "sm", cols: 1 }]}
          style={{
            width: "100%",
          }}
        >
          <TextInput
            label="Username"
            placeholder="username"
            style={{
              width: "100%",
            }}
            autoComplete="off"
            size="md"
            styles={{ input: { border: "1px solid #a7a7a8" } }}
            labelProps={{ style: { color: Colors.white } }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextInput
            label="Email Address"
            placeholder="user@email.com"
            style={{
              width: "100%",
            }}
            autoComplete="off"
            size="md"
            styles={{ input: { border: "1px solid #a7a7a8" } }}
            labelProps={{ style: { color: Colors.white } }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </SimpleGrid>

        <Stack
          spacing={"xs"}
          style={{
            width: "100%",
          }}
          mt="xl"
        >
          <Button
            style={{ backgroundColor: Colors.secondary }}
            onClick={() => {
              handleUpdate();
              setLoading(true);
            }}
          >
            Update Profile
          </Button>

          <Button
            style={{ backgroundColor: Colors.primary }}
            onClick={() => {
              navigation(-1);
            }}
          >
            Cancel
          </Button>
        </Stack>
      </Grid>
    </div>
  );
};

export default UserProfileDetails;
