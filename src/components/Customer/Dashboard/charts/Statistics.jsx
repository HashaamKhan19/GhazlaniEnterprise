import { Box, Card, CardSection, Group, Stack, Text } from "@mantine/core";
import React from "react";
import Colors from "../../../../utils/Colors";
import { BsBookHalf, BsFillCalendarDateFill } from "react-icons/bs";
import { MdManageAccounts } from "react-icons/md";

const Statistics = () => {
  const data = [
    {
      id: 1,
      label: "Courses Left",
      value: 3,
      icon: BsBookHalf,
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
    <Group style={{ width: "100%", justifyContent: "space-between" }} mb={"xl"}>
      {data.map((item) => (
        <Card key={item.id} style={{ width: "30%" }} radius={"lg"}>
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
