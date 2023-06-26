import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Colors from "../../utils/Colors";
import { Button, Grid, SimpleGrid, Stack, TextInput } from "@mantine/core";

const UserProfileDetails = () => {
  //accepts the states which are passed from the previous page
  const location = useLocation();
  const { userData } = location.state;

  const navigation = useNavigate();

  console.log("userData: statetete: ", userData);

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
            value={userData?.name || null}
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
            value={userData?.email || null}
          />
          <TextInput
            label="Phone Number"
            placeholder="1234567890"
            style={{
              width: "100%",
            }}
            autoComplete="off"
            size="md"
            styles={{ input: { border: "1px solid #a7a7a8" } }}
            labelProps={{ style: { color: Colors.white } }}
            value={userData?.phone || null}
          />
          <TextInput
            label="Address"
            placeholder="1234 Main St"
            style={{
              width: "100%",
            }}
            autoComplete="off"
            size="md"
            styles={{ input: { border: "1px solid #a7a7a8" } }}
            labelProps={{ style: { color: Colors.white } }}
            value={userData?.address || null}
          />
        </SimpleGrid>

        <Stack
          spacing={"xs"}
          style={{
            width: "100%",
          }}
          mt="xl"
        >
          <Button style={{ backgroundColor: Colors.secondary }}>
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
