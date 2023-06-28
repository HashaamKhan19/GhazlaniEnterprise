import { Box, Card, CardSection, Group, Stack, Text } from "@mantine/core";
import React, { useContext } from "react";
import Colors from "../../../utils/Colors";
import { BsPersonCheck, BsFillCalendarDateFill } from "react-icons/bs";
import { MdManageAccounts } from "react-icons/md";
import { useMediaQuery } from "@mantine/hooks";
import { AuthContext } from "../../../context/authContext";

const Statistics = () => {
  const match500 = useMediaQuery("(max-width: 500px)");
  const auth = useContext(AuthContext);
  const levels = auth.user?.levels;

  // get the number of days from today to the provided time
  const getDaysDifference = (time) => {
    const today = new Date();
    const endDate = new Date(time);
    // get the difference between the two dates
    const diffTime = Math.abs(endDate - today);
    // divide the time by the number of milliseconds in a day
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // get the number of days till the end of level and divide by 7 to get the number of weeks
  let weeksLeft;
  if (auth.user.currentLevel == 1) {
    weeksLeft = getDaysDifference(levels.level_1.duration) / 7;
  } else {
    weeksLeft = getDaysDifference(levels.level_2.duration) / 7;
  }
  weeksLeft = weeksLeft.toFixed(0);
  const data = [
    {
      id: 1,
      label: "Attendance",
      value: auth.user.attendancePercentage + "%",
      icon: BsPersonCheck,
    },
    {
      id: 2,
      label: "Weeks Left",
      value: weeksLeft,
      icon: BsFillCalendarDateFill,
    },
    {
      id: 3,
      label: "Account Level",
      value: auth.user.currentLevel,
      icon: MdManageAccounts,
    },
  ];

  return (
    <Group
      style={{
        width: "100%",
        justifyContent: match500 ? "center" : "space-between",
        flexDirection: match500 ? "column" : "row",
      }}
      mb={"xl"}
    >
      {data.map((item) => (
        <Card
          key={item.id}
          style={{ width: match500 ? "100%" : "30%" }}
          radius={"lg"}
          marginBottom={match500 ? "1rem" : undefined}
        >
          <CardSection bg={Colors.primary} p={"xs"}>
            <Group style={{ justifyContent: "space-between" }} p={"xs"}>
              <Stack gap={0}>
                <Text size="lg" c={Colors.white} weight={500}>
                  {item.label}
                </Text>
                <Text size="lg" weight={600} color={Colors.secondary}>
                  {item.value}
                </Text>
              </Stack>
              <item.icon size={30} color={Colors.secondary} />
            </Group>
          </CardSection>
        </Card>
      ))}
    </Group>
  );
};

export default Statistics;
