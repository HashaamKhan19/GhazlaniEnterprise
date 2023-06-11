import { Box, Group, Paper, Stack, Text } from "@mantine/core";
import React from "react";
import Colors from "../../../utils/Colors";

const Statistics = () => {
  return (
    <Box
      mt="md"
      sx={{
        flex: 1,
        display: "flex",
        justifyContent: "space-between",
        gap: 10,
      }}
      mb={"lg"}
    >
      <Paper p="lg" style={{ width: "50%" }} bg={Colors.primary} radius={"lg"}>
        <Stack>
          <Text c={Colors.white} size={"xl"}>
            Attendance
          </Text>
          <Text c={Colors.secondary} size={"lg"}>
            100%
          </Text>
        </Stack>
      </Paper>
      <Paper p="lg" style={{ width: "50%" }} bg={Colors.primary} radius={"lg"}>
        <Stack>
          <Text c={Colors.white} size={"xl"}>
            Weeks Left
          </Text>
          <Text c={Colors.secondary} size={"lg"}>
            3
          </Text>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Statistics;
