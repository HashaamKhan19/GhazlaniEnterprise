import { Button, Group, Paper, Stack, Text, Textarea, Timeline } from "@mantine/core";
import React, { useContext, useRef, useState } from "react";
import Colors from "../../../utils/Colors";
import axios from "axios";
import { AuthContext } from "../../../context/authContext";

const Questions = () => {
  const inputRef = useRef();
  const auth = useContext(AuthContext);
  console.log("🚀 ~ file: Questions.jsx:10 ~ Questions ~ auth:", auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/api/users/markAttendance", {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${auth.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ answer: inputRef.current.value }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("user", JSON.stringify(data?.user));
        auth.setUser(data?.user);
      });
  };
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum magnam quibusdam
            obcaecati sint consequuntur accusantium, voluptates sequi quae corporis in velit
            doloremque! Sapiente nam corrupti modi, aspernatur optio impedit repellendus.
          </Text>
        </Stack>
      </Paper>
      <form onSubmit={handleSubmit}>
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
              ref={inputRef}
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
                type="submit"
              >
                Submit
              </Button>
            </Group>
          </Stack>
        </Paper>
      </form>
    </div>
  );
};

export default Questions;
