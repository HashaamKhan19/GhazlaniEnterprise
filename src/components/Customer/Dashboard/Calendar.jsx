import { Group, Indicator, Stack, Text } from "@mantine/core";
import { Calendar as MyCalendar } from "@mantine/dates";
import Colors from "../../../utils/Colors";

const Calendar = () => {
  return (
    <Stack pt={"xl"} spacing={0}>
      <Text c={Colors.white} size={"xl"} fw={600} align="center">
        Calendar
      </Text>
      <Group position="center" mt={"xl"}>
        <MyCalendar
          static
          renderDay={(date) => {
            const day = date.getDate();
            return (
              <Indicator
                size={6}
                color={Colors.secondary}
                offset={-2}
                disabled={day !== 16}
              >
                <div>{day}</div>
              </Indicator>
            );
          }}
          bg={Colors.white}
          p={"lg"}
          style={{
            borderRadius: "10px",
          }}
        />
      </Group>
    </Stack>
  );
};
export default Calendar;
