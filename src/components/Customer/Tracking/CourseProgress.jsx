import { Paper, Progress, Text } from "@mantine/core";
import React from "react";
import Colors from "../../../utils/Colors";

const CourseProgress = () => {
  return (
    <>
      <Text c={Colors.white} size={26} p={"xs"} mb={"xs"}>
        Course Tracking
      </Text>{" "}
      <Paper p={"xl"} radius={"lg"}>
        <Text size={22} mb={"xs"}>
          Udemy Course
        </Text>
        <Text size={"md"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          blanditiis sed quia dicta dignissimos ex qui iusto
        </Text>

        <Progress
          value={30}
          mt={"lg"}
          styles={{
            bar: {
              backgroundColor: Colors.secondary,
            },
            root: {
              backgroundColor: Colors.primary,
            },
          }}
          size={"md"}
        />
      </Paper>
    </>
  );
};

export default CourseProgress;
