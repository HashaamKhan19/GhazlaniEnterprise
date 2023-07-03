import { Button, Group, Select, Stack, Textarea } from "@mantine/core";
import React from "react";
import Colors from "../../../utils/Colors";
import { toast } from "react-hot-toast";

const Questions = () => {
  const [level, setLevel] = React.useState("1"); // ["1", "2"]
  const [questionTitle, setQuestionTitle] = React.useState("");
  const [question, setQuestion] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/questions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        question,
        questionLevel: level,
        title: questionTitle,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          toast.success("Question added successfully", {
            position: "top-center",
            duration: 4000,
          });
        } else {
          throw new Error(data.message);
        }
      })
      .catch((err) => {
        toast.error(err.message, {
          position: "top-center",
          duration: 4000,
        });
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={"xs"} mt={"xs"}>
        <Select
          placeholder="Select account level"
          label="Account Level"
          // defaultValue="1"
          data={["1", "2"]}
          value={level}
          onChange={setLevel}
          styles={{
            item: {
              "&[data-selected]": {
                "&, &:hover": {
                  backgroundColor: Colors.secondary,
                  color: Colors.white,
                },
              },
            },
            label: {
              fontSize: "1.2rem",
              fontWeight: 600,
              color: Colors.white,
            },
          }}
        />
        <Textarea
          placeholder="Enter question title"
          label="Question Title"
          styles={{
            label: {
              fontSize: "1.2rem",
              fontWeight: 600,
              color: Colors.white,
            },
          }}
          value={questionTitle}
          onChange={(e) => setQuestionTitle(e.target.value)}
          minRows={2}
        />
        <Textarea
          placeholder="Enter question"
          label="Question"
          styles={{
            label: {
              fontSize: "1.2rem",
              fontWeight: 600,
              color: Colors.white,
            },
          }}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          minRows={2}
        />
      </Stack>
      <Group position="right" mt={"md"}>
        <Button
          type="submit"
          style={{
            backgroundColor: Colors.primary,
            width: "100px",
          }}
        >
          Add
        </Button>
      </Group>
    </form>
  );
};

export default Questions;
