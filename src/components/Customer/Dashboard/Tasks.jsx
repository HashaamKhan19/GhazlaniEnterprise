import { Box, Checkbox, Group, Paper, Stack, Text } from "@mantine/core";
import React from "react";
import Colors from "../../../utils/Colors";

const Tasks = () => {
  const todayTasks = [
    {
      id: 1,
      label: "Task 1",
      description: "Task details",
      completed: false,
    },
    {
      id: 2,
      label: "Task 2",
      description: "Task details",
      completed: false,
    },
    {
      id: 3,
      label: "Task 3",
      description: "Task details",
      completed: true,
    },
  ];

  return (
    <Stack spacing={0} pt={"xl"}>
      <Text c={Colors.white} size={"xl"} fw={600}>
        Tasks for Today
      </Text>
      <Box>
        {todayTasks.map((item) => (
          <Group
            style={{
              display: "flex",
              justifyContent: "space-between",
              borderRadius: "10px",
              borderLeft: item.completed
                ? `12px solid ${Colors.secondary}`
                : `12px solid ${Colors.red}`,
            }}
            key={item.id}
            my={"lg"}
            p={"xs"}
            bg={Colors.primary}
          >
            <Stack>
              <Text c={Colors.white}>{item.label}</Text>
              <Text c={Colors.white}>{item.description}</Text>
            </Stack>
            <Checkbox
              radius="xl"
              size="xs"
              checked={item.completed}
              mr={"xs"}
            />
          </Group>
        ))}
      </Box>
    </Stack>
  );
};

export default Tasks;
