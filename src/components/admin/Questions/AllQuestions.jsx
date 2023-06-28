import { ActionIcon, Center, Table, createStyles, rem } from "@mantine/core";
import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Colors from "../../../utils/Colors";
import data from "./answer";

// eslint-disable-next-line react/prop-types
const AllQuestions = ({ check, setCheck }) => {
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
        {row.createdOn}
      </td>
      <td
        className={cx(classes.accountLevelColumn)}
        style={{ fontSize: "1rem", textAlign: "left" }}
      >
        {row.accountLevel}
      </td>
      <td
        className={cx(classes.questionColumn)}
        style={{ fontSize: "1rem", textAlign: "left" }}
      >
        {row.Question}
      </td>
      <td>
        <Center>
          <ActionIcon
            onClick={() => {
              setCheck(!check);
            }}
          >
            <HiOutlineArrowNarrowRight size={22} color={Colors.primary} />
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
            <th style={{ fontSize: "1.1rem", textAlign: "left" }}>
              Created On
            </th>
            <th style={{ fontSize: "1.1rem", textAlign: "left" }}>
              Account Level
            </th>
            <th style={{ fontSize: "1.1rem", textAlign: "left" }}>Question</th>
            <th style={{ fontSize: "1.1rem", textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
};

export default AllQuestions;
