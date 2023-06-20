import React from "react";
import { useLocation } from "react-router-dom";
import Colors from "../../utils/Colors";
import { Grid, SimpleGrid, TextInput } from "@mantine/core";

const UserProfileDetails = () => {
  //accepts the states which are passed from the previous page
  const location = useLocation();
  const { userData } = location.state;

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
          />
        </SimpleGrid>
      </Grid>
    </div>
  );
};

export default UserProfileDetails;
