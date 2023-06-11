import { Box, Card, CardSection, Group, Stack, Text } from "@mantine/core";
import React from "react";
import Colors from "../../../utils/Colors";
import { BsPersonCheck, BsFillCalendarDateFill } from "react-icons/bs";
import { MdManageAccounts } from "react-icons/md";
import { useMediaQuery } from "@mantine/hooks";

const Statistics = () => {
  const match500 = useMediaQuery("(max-width: 500px)");

  const data = [
    {
      id: 1,
      label: "Attendance",
      value: "100%",
      icon: BsPersonCheck,
    },
    {
      id: 2,
      label: "Weeks Left",
      value: 2,
      icon: BsFillCalendarDateFill,
    },
    {
      id: 3,
      label: "Account Level",
      value: 1,
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
