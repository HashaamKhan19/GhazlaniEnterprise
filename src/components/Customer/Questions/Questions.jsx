import React, { useContext, useRef, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

import { Button, Group, Loader, Paper, Stack, Text, Textarea, Timeline } from "@mantine/core";

import Colors from "../../../utils/Colors";
import { AuthContext } from "../../../context/authContext";

const Questions = () => {
  const inputRef = useRef();
  const auth = useContext(AuthContext);
  const [question, setQuestion] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/api/questions/dailyQuestion/${auth.user.currentLevel}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setQuestion(data?.data?.question);
        setIsLoading(false);
      })
      .catch((err) => {
        toast.error(err.message, {
          position: "top-center",
          icon: "💀",
        });
      });
    return () => {
      setQuestion(null);
    };
  }, [auth.token, auth.user.currentLevel]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/api/users/markAttendance", {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${auth.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        questionId: question?._id,
        answer: inputRef.current.value,
      }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((err) => {
            throw new Error(err.message || "Request failed with status " + err.status);
          });
        }
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem("user", JSON.stringify(data?.data?.user));
        auth.setUser(data?.data?.user);
        toast.success(data?.message || "Answer submitted successfully!", {
          position: "top-center",
          icon: "👏",
        });
        inputRef.current.value = "";
      })
      .catch((err) => {
        toast.error(err.message, {
          position: "top-center",
          icon: "💀",
        });
        setIsLoading(false);
      });
  };
  if (isLoading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Loader size={"xl"} color={Colors.secondary} />
      </div>
    );
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
            {question ? (
              question?.question
            ) : (
              <div>
                <h2 style={{ color: "white" }}>No question for today yet</h2>
              </div>
            )}
          </Text>
        </Stack>
      </Paper>

      {question && (
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
      )}
    </div>
  );
};

export default Questions;
