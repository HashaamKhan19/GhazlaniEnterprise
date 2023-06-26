import {
  ActionIcon,
  Button,
  Group,
  Select,
  SimpleGrid,
  Text,
} from "@mantine/core";
import { TimeInput } from "@mantine/dates";
import React, { useRef, useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import Colors from "../../../utils/Colors";

const TimeTable = () => {
  const refAwakeMonday = useRef();
  const refSleepMonday = useRef();

  const refAwakeTuesday = useRef();
  const refSleepTuesday = useRef();

  const refAwakeWednesday = useRef();
  const refSleepWednesday = useRef();

  const refAwakeThursday = useRef();
  const refSleepThursday = useRef();

  const refAwakeFriday = useRef();
  const refSleepFriday = useRef();

  const refAwakeSaturday = useRef();
  const refSleepSaturday = useRef();

  const refAwakeSunday = useRef();
  const refSleepSunday = useRef();

  const [awakeTimeMonday, setAwakeTimeMonday] = useState("");
  const [sleepTimeMonday, setSleepTimeMonday] = useState("");

  const [awakeTimeTuesday, setAwakeTimeTuesday] = useState("");
  const [sleepTimeTuesday, setSleepTimeTuesday] = useState("");

  const [awakeTimeWednesday, setAwakeTimeWednesday] = useState("");
  const [sleepTimeWednesday, setSleepTimeWednesday] = useState("");

  const [awakeTimeThursday, setAwakeTimeThursday] = useState("");
  const [sleepTimeThursday, setSleepTimeThursday] = useState("");

  const [awakeTimeFriday, setAwakeTimeFriday] = useState("");
  const [sleepTimeFriday, setSleepTimeFriday] = useState("");

  const [awakeTimeSaturday, setAwakeTimeSaturday] = useState("");
  const [sleepTimeSaturday, setSleepTimeSaturday] = useState("");

  const [awakeTimeSunday, setAwakeTimeSunday] = useState("");
  const [sleepTimeSunday, setSleepTimeSunday] = useState("");

  const [awakeTime, setAwakeTime] = useState("");
  const [sleepTime, setSleepTime] = useState("");

  const handleAwakeTimeMonday = (value) => {
    setAwakeTimeMonday(value);
  };

  const handleSleepTimeMonday = (value) => {
    setSleepTimeMonday(value);
  };

  const handleAwakeTimeTuesday = (value) => {
    setAwakeTimeTuesday(value);
  };

  const handleSleepTimeTuesday = (value) => {
    setSleepTimeTuesday(value);
  };

  const handleAwakeTimeWednesday = (value) => {
    setAwakeTimeWednesday(value);
  };

  const handleSleepTimeWednesday = (value) => {
    setSleepTimeWednesday(value);
  };

  const handleAwakeTimeThursday = (value) => {
    setAwakeTimeThursday(value);
  };

  const handleSleepTimeThursday = (value) => {
    setSleepTimeThursday(value);
  };

  const handleAwakeTimeFriday = (value) => {
    setAwakeTimeFriday(value);
  };

  const handleSleepTimeFriday = (value) => {
    setSleepTimeFriday(value);
  };

  const handleAwakeTimeSaturday = (value) => {
    setAwakeTimeSaturday(value);
  };

  const handleSleepTimeSaturday = (value) => {
    setSleepTimeSaturday(value);
  };

  const handleAwakeTimeSunday = (value) => {
    setAwakeTimeSunday(value);
  };

  const handleSleepTimeSunday = (value) => {
    setSleepTimeSunday(value);
  };

  const handleAwakeTime = (value) => {
    setAwakeTime(value);
  };

  const handleSleepTime = (value) => {
    setSleepTime(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all input fields are filled
    if (
      awakeTimeMonday &&
      awakeTimeTuesday &&
      awakeTimeWednesday &&
      awakeTimeThursday &&
      awakeTimeFriday &&
      awakeTimeSaturday &&
      awakeTimeSunday &&
      sleepTimeMonday &&
      sleepTimeTuesday &&
      sleepTimeWednesday &&
      sleepTimeThursday &&
      sleepTimeFriday &&
      sleepTimeSaturday &&
      sleepTimeSunday
    ) {
      // Convert awake and sleep times to numerical representation (total minutes)
      const totalAwakeTime =
        awakeTimeMonday.getHours() * 60 +
        awakeTimeMonday.getMinutes() +
        awakeTimeTuesday.getHours() * 60 +
        awakeTimeTuesday.getMinutes() +
        awakeTimeWednesday.getHours() * 60 +
        awakeTimeWednesday.getMinutes() +
        awakeTimeThursday.getHours() * 60 +
        awakeTimeThursday.getMinutes() +
        awakeTimeFriday.getHours() * 60 +
        awakeTimeFriday.getMinutes() +
        awakeTimeSaturday.getHours() * 60 +
        awakeTimeSaturday.getMinutes() +
        awakeTimeSunday.getHours() * 60 +
        awakeTimeSunday.getMinutes();

      const totalSleepTime =
        sleepTimeMonday.getHours() * 60 +
        sleepTimeMonday.getMinutes() +
        sleepTimeTuesday.getHours() * 60 +
        sleepTimeTuesday.getMinutes() +
        sleepTimeWednesday.getHours() * 60 +
        sleepTimeWednesday.getMinutes() +
        sleepTimeThursday.getHours() * 60 +
        sleepTimeThursday.getMinutes() +
        sleepTimeFriday.getHours() * 60 +
        sleepTimeFriday.getMinutes() +
        sleepTimeSaturday.getHours() * 60 +
        sleepTimeSaturday.getMinutes() +
        sleepTimeSunday.getHours() * 60 +
        sleepTimeSunday.getMinutes();

      // Calculate the average awake and sleep times
      const averageAwakeTime = totalAwakeTime / 7;
      const averageSleepTime = totalSleepTime / 7;

      // Update the state variables
      setAwakeTime(formatTime(averageAwakeTime));
      setSleepTime(formatTime(averageSleepTime));
    } else {
      // Alert if any input field is missed
      alert("Please fill in all input fields.");
    }
  };

  // Helper function to format the time
  const formatTime = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div
      style={{
        marginTop: "1rem",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontSize: "1.8rem",
          color: Colors.white,
          marginBottom: "2rem",
        }}
      >
        Manage your TimeTable
      </Text>
      <form onSubmit={handleSubmit}>
        <SimpleGrid
          cols={2}
          breakpoints={[
            { maxWidth: 1000, cols: 1 },
            { maxWidth: 700, cols: 1 },
            { maxWidth: 500, cols: 1 },
          ]}
        >
          <TimeInput
            label="Enter awake time for Monday"
            ref={refAwakeMonday}
            rightSection={
              <ActionIcon onClick={() => refAwakeMonday.current.showPicker()}>
                <AiOutlineClockCircle size="1rem" stroke={1.5} />
              </ActionIcon>
            }
            styles={{
              label: {
                color: Colors.white,
                fontSize: "1rem",
              },
            }}
            onChange={handleAwakeTimeMonday}
          />

          <TimeInput
            label="Enter sleep time for Monday"
            ref={refSleepMonday}
            rightSection={
              <ActionIcon onClick={() => refSleepMonday.current.showPicker()}>
                <AiOutlineClockCircle size="1rem" stroke={1.5} />
              </ActionIcon>
            }
            styles={{
              label: {
                color: Colors.white,
                fontSize: "1rem",
              },
            }}
            onChange={handleSleepTimeMonday}
          />

          <TimeInput
            label="Enter awake time for Tuesday"
            ref={refAwakeTuesday}
            rightSection={
              <ActionIcon onClick={() => refAwakeTuesday.current.showPicker()}>
                <AiOutlineClockCircle size="1rem" stroke={1.5} />
              </ActionIcon>
            }
            styles={{
              label: {
                color: Colors.white,
                fontSize: "1rem",
              },
            }}
            onChange={handleAwakeTimeTuesday}
          />

          <TimeInput
            label="Enter sleep time for Tuesday"
            ref={refSleepTuesday}
            rightSection={
              <ActionIcon onClick={() => refSleepTuesday.current.showPicker()}>
                <AiOutlineClockCircle size="1rem" stroke={1.5} />
              </ActionIcon>
            }
            styles={{
              label: {
                color: Colors.white,
                fontSize: "1rem",
              },
            }}
            onChange={handleSleepTimeTuesday}
          />

          <TimeInput
            label="Enter awake time for Wednesday"
            ref={refAwakeWednesday}
            rightSection={
              <ActionIcon
                onClick={() => refAwakeWednesday.current.showPicker()}
              >
                <AiOutlineClockCircle size="1rem" stroke={1.5} />
              </ActionIcon>
            }
            styles={{
              label: {
                color: Colors.white,
                fontSize: "1rem",
              },
            }}
            onChange={handleAwakeTimeWednesday}
          />

          <TimeInput
            label="Enter sleep time for Wednesday"
            ref={refSleepWednesday}
            rightSection={
              <ActionIcon
                onClick={() => refSleepWednesday.current.showPicker()}
              >
                <AiOutlineClockCircle size="1rem" stroke={1.5} />
              </ActionIcon>
            }
            styles={{
              label: {
                color: Colors.white,
                fontSize: "1rem",
              },
            }}
            onChange={handleSleepTimeWednesday}
          />

          <TimeInput
            label="Enter awake time for Thursday"
            ref={refAwakeThursday}
            rightSection={
              <ActionIcon onClick={() => refAwakeThursday.current.showPicker()}>
                <AiOutlineClockCircle size="1rem" stroke={1.5} />
              </ActionIcon>
            }
            styles={{
              label: {
                color: Colors.white,
                fontSize: "1rem",
              },
            }}
            onChange={handleAwakeTimeThursday}
          />

          <TimeInput
            label="Enter sleep time for Thursday"
            ref={refSleepThursday}
            rightSection={
              <ActionIcon onClick={() => refSleepThursday.current.showPicker()}>
                <AiOutlineClockCircle size="1rem" stroke={1.5} />
              </ActionIcon>
            }
            styles={{
              label: {
                color: Colors.white,
                fontSize: "1rem",
              },
            }}
            onChange={handleSleepTimeThursday}
          />

          <TimeInput
            label="Enter awake time for Friday"
            ref={refAwakeFriday}
            rightSection={
              <ActionIcon onClick={() => refAwakeFriday.current.showPicker()}>
                <AiOutlineClockCircle size="1rem" stroke={1.5} />
              </ActionIcon>
            }
            styles={{
              label: {
                color: Colors.white,
                fontSize: "1rem",
              },
            }}
            onChange={handleAwakeTimeFriday}
          />

          <TimeInput
            label="Enter sleep time for Friday"
            ref={refSleepFriday}
            rightSection={
              <ActionIcon onClick={() => refSleepFriday.current.showPicker()}>
                <AiOutlineClockCircle size="1rem" stroke={1.5} />
              </ActionIcon>
            }
            styles={{
              label: {
                color: Colors.white,
                fontSize: "1rem",
              },
            }}
            onChange={handleSleepTimeFriday}
          />

          <TimeInput
            label="Enter awake time for Saturday"
            ref={refAwakeSaturday}
            rightSection={
              <ActionIcon onClick={() => refAwakeSaturday.current.showPicker()}>
                <AiOutlineClockCircle size="1rem" stroke={1.5} />
              </ActionIcon>
            }
            styles={{
              label: {
                color: Colors.white,
                fontSize: "1rem",
              },
            }}
            onChange={handleAwakeTimeSaturday}
          />

          <TimeInput
            label="Enter sleep time for Saturday"
            ref={refSleepSaturday}
            rightSection={
              <ActionIcon onClick={() => refSleepSaturday.current.showPicker()}>
                <AiOutlineClockCircle size="1rem" stroke={1.5} />
              </ActionIcon>
            }
            styles={{
              label: {
                color: Colors.white,
                fontSize: "1rem",
              },
            }}
            onChange={handleSleepTimeSaturday}
          />

          <TimeInput
            label="Enter awake time for Sunday"
            ref={refAwakeSunday}
            rightSection={
              <ActionIcon onClick={() => refAwakeSunday.current.showPicker()}>
                <AiOutlineClockCircle size="1rem" stroke={1.5} />
              </ActionIcon>
            }
            styles={{
              label: {
                color: Colors.white,
                fontSize: "1rem",
              },
            }}
            onChange={handleAwakeTimeSunday}
          />

          <TimeInput
            label="Enter sleep time for Sunday"
            ref={refSleepSunday}
            rightSection={
              <ActionIcon onClick={() => refSleepSunday.current.showPicker()}>
                <AiOutlineClockCircle size="1rem" stroke={1.5} />
              </ActionIcon>
            }
            styles={{
              label: {
                color: Colors.white,
                fontSize: "1rem",
              },
            }}
            onChange={handleSleepTimeSunday}
          />
        </SimpleGrid>
        <Group my={"md"} style={{ width: "100%" }}>
          <Button
            style={{ backgroundColor: Colors.primary }}
            fullWidth
            type="submit"
          >
            <Text style={{ color: Colors.white }}>Submit</Text>
          </Button>
        </Group>
      </form>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "400px",
          margin: "auto",
          marginTop: "1rem",
        }}
      >
        {awakeTime && sleepTime && (
          <div style={{ marginTop: "1rem", textAlign: "center" }}>
            <Text style={{ fontSize: "1.2rem", color: Colors.white }}>
              Average Awake Time:
              <Text style={{ fontSize: "1.1rem", color: Colors.secondary }}>
                {awakeTime} hours
              </Text>
            </Text>
            <Text style={{ fontSize: "1.2rem", color: Colors.white }}>
              Average Sleep Time:
              <Text style={{ fontSize: "1.1rem", color: Colors.secondary }}>
                {sleepTime} hours
              </Text>
            </Text>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimeTable;
