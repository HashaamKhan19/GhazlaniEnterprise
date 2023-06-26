import { Button, Group, Select, Stack, Textarea } from "@mantine/core";
import React from "react";
import Colors from "../../../utils/Colors";

const Questions = () => {
  return (
    <form>
      <Stack spacing={"xs"} mt={"xs"}>
        <Select
          placeholder="Select account level"
          label="Account Level"
          defaultValue="1"
          data={["1", "2"]}
          styles={{
            item: {
              "&[data-selected]": {
                "&, &:hover": {
                  backgroundColor: Colors.secondary,
                  color: Colors.white,
                },
              },
            },
            label: {
              fontSize: "1.2rem",
              fontWeight: 600,
              color: Colors.white,
            },
          }}
        />
        <Textarea
          placeholder="Enter question"
          label="Question"
          styles={{
            label: {
              fontSize: "1.2rem",
              fontWeight: 600,
              color: Colors.white,
            },
          }}
          minRows={2}
        />
      </Stack>
      <Group position="right" mt={"md"}>
        <Button
          style={{
            backgroundColor: Colors.primary,
            width: "100px",
          }}
        >
          Add
        </Button>
      </Group>
    </form>
  );
};

export default Questions;
