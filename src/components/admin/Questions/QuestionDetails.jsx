import {
  ActionIcon,
  Badge,
  Center,
  Modal,
  Stack,
  Table,
  Text,
  createStyles,
  rem,
} from "@mantine/core";
import React, { useState } from "react";
import Colors from "../../../utils/Colors";
import { AiOutlineEye } from "react-icons/ai";
import { useDisclosure } from "@mantine/hooks";

// eslint-disable-next-line react/prop-types
const QuestionDetails = ({ check, setCheck, answerData, setAnswerData }) => {
  const useStyles = createStyles((theme) => ({
    header: {
      position: "sticky",
      top: 0,
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      transition: "box-shadow 150ms ease",

      "&::after": {
        content: '""',
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        borderBottom: `${rem(1)} solid ${
          theme.colorScheme === "dark"
            ? theme.colors.dark[3]
            : theme.colors.gray[2]
        }`,
      },
    },

    table: {
      width: "100%",
      overflowX: "auto",
    },

    createdColumn: {},
    accountLevelColumn: {},
    questionColumn: {
      minWidth: "300px",
    },
  }));

  const [opened, { open, close }] = useDisclosure(false);

  const { classes, cx } = useStyles();

  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleViewAnswer = (answer) => {
    setSelectedAnswer(answer);
    open();
  };

  const rows =
    //eslint-disable-next-line
    answerData?.length === 0 ? (
      <tr>
        <td colSpan="12" style={{ textAlign: "center" }}>
          <Text fw={600} size={"md"}>
            No data found
          </Text>
        </td>
      </tr>
    ) : (
      //eslint-disable-next-line
      answerData?.map((row) => (
        <tr key={row._id}>
          <td style={{ fontSize: "1rem", textAlign: "left" }}>
            {/* eslint-disable-next-line */}
            {answerData.indexOf(row) + 1}
          </td>
          <td
            className={cx(classes.createdColumn)}
            style={{ fontSize: "1rem", textAlign: "left" }}
          >
            {row?.user?.name}
          </td>
          <td
            className={cx(classes.accountLevelColumn)}
            style={{ fontSize: "1rem", textAlign: "left" }}
          >
            <Badge c={Colors.secondary}>Answered</Badge>
          </td>
          <td>
            <Center>
              <ActionIcon onClick={() => handleViewAnswer(row)}>
                <AiOutlineEye color={Colors.blue} size={22} />
              </ActionIcon>
            </Center>
          </td>
        </tr>
      ))
    );

  return (
    <>
      <div className={cx(classes.table)}>
        <Table miw={700} highlightOnHover>
          <thead className={cx(classes.header)}>
            <tr>
              <th style={{ fontSize: "1.1rem", textAlign: "left" }}>ID</th>
              <th style={{ fontSize: "1.1rem", textAlign: "left" }}>
                Username
              </th>
              <th style={{ fontSize: "1.1rem", textAlign: "left" }}>Status</th>
              <th style={{ fontSize: "1.1rem", textAlign: "center" }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </div>

      <Modal
        opened={opened}
        onClose={close}
        title="View Answer Details"
        centered
        overlayProps={{
          color: Colors.black,
          opacity: 0.55,
          blur: 3,
        }}
        styles={{
          title: {
            color: Colors.black,
            fontWeight: 700,
            fontSize: "1.1rem",
            width: "100%",
            textAlign: "center",
            textTransform: "uppercase",
          },
        }}
        padding={"xl"}
        radius={"md"}
      >
        <Stack align="center">
          <Text c={Colors.black} fw={600} size={"lg"}>
            Email of User:{" "}
            <span style={{ fontWeight: 400, marginLeft: "1rem" }}>
              {/* eslint-disable-next-line */}
              {selectedAnswer?.user?.email}
            </span>
          </Text>
          <Text c={Colors.black} fw={600} size={"lg"}>
            Answer:{" "}
            <span style={{ fontWeight: 400, marginLeft: "1rem" }}>
              {/* eslint-disable-next-line */}
              {selectedAnswer?.answer}
            </span>
          </Text>
        </Stack>
      </Modal>
    </>
  );
};

export default QuestionDetails;
