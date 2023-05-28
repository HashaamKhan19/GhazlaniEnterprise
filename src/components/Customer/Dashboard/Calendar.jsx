import { Group, Indicator } from "@mantine/core";
import { Calendar as MyCalendar } from "@mantine/dates";
import Colors from "../../../utils/Colors";

const Calendar = () => {
  return (
    <Group position="center">
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
      />
    </Group>
  );
};
export default Calendar;
