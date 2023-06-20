import { ActionIcon, Button, Select, Text } from "@mantine/core";
import { TimeInput } from "@mantine/dates";
import React, { useRef, useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import Colors from "../../../utils/Colors";

const TimeTable = () => {
  const refAwake = useRef();
  const refSleep = useRef();

  const [awakeTime, setAwakeTime] = useState();
  const [sleepTime, setSleepTime] = useState();

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
      <form>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            maxWidth: "400px",
            margin: "auto",
          }}
        >
          <TimeInput
            label="Enter awake time"
            ref={refAwake}
            rightSection={
              <ActionIcon onClick={() => refAwake.current.showPicker()}>
                <AiOutlineClockCircle size="1rem" stroke={1.5} />
              </ActionIcon>
            }
            styles={{
              label: {
                color: Colors.white,
                fontSize: "1rem",
              },
            }}
            onChange={(event) => setAwakeTime(event.currentTarget.value)}
          />

          <TimeInput
            label="Enter sleep time"
            ref={refSleep}
            rightSection={
              <ActionIcon onClick={() => refSleep.current.showPicker()}>
                <AiOutlineClockCircle size="1rem" stroke={1.5} />
              </ActionIcon>
            }
            styles={{
              label: {
                color: Colors.white,
                fontSize: "1rem",
              },
            }}
            onChange={(event) => setSleepTime(event.currentTarget.value)}
          />

          <Button style={{ backgroundColor: Colors.primary }}>
            <Text style={{ color: Colors.white }}>Submit</Text>
          </Button>
        </div>
      </form>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          maxWidth: "400px",
          margin: "auto",
          marginTop: "2rem",
        }}
      >
        <Text
          style={{ color: Colors.white, fontSize: "1.2rem", fontWeight: 500 }}
        >
          My Awake time:{" "}
          <span style={{ color: Colors.secondary, fontSize: "1rem" }}>
            {awakeTime || "Not yet available"}
          </span>
        </Text>
        <Text style={{ color: Colors.white, fontSize: "1.2rem" }}>
          My Awake time:{" "}
          <span style={{ color: Colors.secondary, fontSize: "1rem" }}>
            {sleepTime || "Not yet available"}
          </span>
        </Text>
      </div>
    </div>
  );
};

export default TimeTable;
