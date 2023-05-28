import { Box, Checkbox, Group, Paper, Stack, Text } from "@mantine/core";
import React from "react";

const Tasks = () => {
  return (
    <Box>
      <Group
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Stack>
          <Text>Task 1</Text>
          <Text>Task details</Text>
        </Stack>
        <Checkbox radius="xl" size="xs" />
      </Group>
    </Box>
  );
};

export default Tasks;
