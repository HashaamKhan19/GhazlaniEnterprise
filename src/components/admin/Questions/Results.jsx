import { Paper, Text, Group, TextInput, ActionIcon } from "@mantine/core";
import Colors from "../../../utils/Colors";
import { useNavigate } from "react-router-dom";
import AllQuestions from "./AllQuestions";
import { useState } from "react";
import QuestionDetails from "./QuestionDetails";
import { BsCaretLeft } from "react-icons/bs";

export default function Results() {
  const navigate = useNavigate();

  const [check, setCheck] = useState(false);
  const [answerData, setAnswerData] = useState([]);

  return (
    <>
      <Paper my={"xs"} radius={"md"} p={"xs"}>
        {/* <Group position="apart" px={"xs"} pb={"xs"}> */}
        {check && (
          <ActionIcon
            color="teal"
            variant="filled"
            onClick={() => {
              setCheck(!check);
            }}
          >
            <BsCaretLeft />
          </ActionIcon>
        )}
        <Text c={Colors.main} fw={600} size={30} align="center" pb={"md"}>
          {check ? "Question Details" : "All Questions"}
        </Text>

        {check ? (
          <QuestionDetails
            check={check}
            setCheck={setCheck}
            answerData={answerData}
            setAnswerData={setAnswerData}
          />
        ) : (
          <AllQuestions
            check={check}
            setCheck={setCheck}
            answerData={answerData}
            setAnswerData={setAnswerData}
          />
        )}
      </Paper>
    </>
  );
}
