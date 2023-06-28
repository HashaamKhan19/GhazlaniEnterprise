import {
  ActionIcon,
  Badge,
  Center,
  Table,
  createStyles,
  rem,
} from "@mantine/core";
import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Colors from "../../../utils/Colors";
import data from "./answerDetails";
import { AiOutlineEye } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
const QuestionDetails = ({ check, setCheck }) => {
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

  const { classes, cx } = useStyles();

  const rows = data.map((row) => (
    <tr key={row.id}>
      <td style={{ fontSize: "1rem", textAlign: "left" }}>{row.id}</td>
      <td
        className={cx(classes.createdColumn)}
        style={{ fontSize: "1rem", textAlign: "left" }}
      >
        {row.username}
      </td>
      <td
        className={cx(classes.accountLevelColumn)}
        style={{ fontSize: "1rem", textAlign: "left" }}
      >
        {row.status ? (
          <Badge c={Colors.secondary}>Answered</Badge>
        ) : (
          <Badge color="red">Not Answered</Badge>
        )}
      </td>
      <td>
        <Center>
          <ActionIcon>
            <AiOutlineEye color={Colors.blue} size={22} />
          </ActionIcon>
        </Center>
      </td>
    </tr>
  ));

  return (
    <div className={cx(classes.table)}>
      <Table miw={700} highlightOnHover>
        <thead className={cx(classes.header)}>
          <tr>
            <th style={{ fontSize: "1.1rem", textAlign: "left" }}>ID</th>
            <th style={{ fontSize: "1.1rem", textAlign: "left" }}>Username</th>
            <th style={{ fontSize: "1.1rem", textAlign: "left" }}>Status</th>
            <th style={{ fontSize: "1.1rem", textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
};

export default QuestionDetails;
