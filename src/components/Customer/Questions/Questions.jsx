import {
  Button,
  Group,
  Paper,
  Stack,
  Text,
  Textarea,
  Timeline,
} from "@mantine/core";
import React, { useState } from "react";
import Colors from "../../../utils/Colors";

const Questions = () => {
  return (
    <div>
      <Text c={Colors.white} size={26} p={"xs"} mb={"xs"}>
        Daily Questions
      </Text>

      <Paper bg={Colors.primary} p={"lg"} radius={"lg"}>
        <Stack>
          <Text c={Colors.white} size={24} fw={"bold"}>
            Question:{" "}
          </Text>
          <Text c={Colors.white} size={16}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
            magnam quibusdam obcaecati sint consequuntur accusantium, voluptates
            sequi quae corporis in velit doloremque! Sapiente nam corrupti modi,
            aspernatur optio impedit repellendus.
          </Text>
        </Stack>
      </Paper>

      <Paper mt={"xl"} radius={"lg"} p={"lg"}>
        <Stack>
          <Textarea
            placeholder="Type your answer here"
            label="Answer"
            styles={{
              label: {
                color: Colors.black,
                fontSize: "18px",
              },
            }}
            minRows={4}
          />
          <Group position="right">
            <Button
              style={{
                backgroundColor: Colors.secondary,
                color: Colors.white,
                border: "none",
                borderRadius: "10px",
                padding: "10px 20px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Submit
            </Button>
          </Group>
        </Stack>
      </Paper>
    </div>
  );
};

export default Questions;
