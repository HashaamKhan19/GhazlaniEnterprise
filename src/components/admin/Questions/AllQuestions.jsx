import {
  ActionIcon,
  Center,
  Loader,
  Table,
  createStyles,
  rem,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Colors from "../../../utils/Colors";
import data from "./answer";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const AllQuestions = ({ check, setCheck, answerData, setAnswerData }) => {
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

  const [loading, setLoading] = useState(false);
  const [questionsResults, setQuestionsResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios.get("http://localhost:3000/api/questions", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setQuestionsResults(result?.data?.data?.questions);
      setLoading(false);
    };
    fetchData();
  }, []);

  const handleAnswerData = (data) => {
    setAnswerData(data);
  };

  const rows = loading ? (
    <tr>
      <td colSpan="12">
        <Center>
          <Loader
            size={"md"}
            variant="dots"
            my={"xl"}
            color={Colors.secondary}
          />
        </Center>
      </td>
    </tr>
  ) : (
    questionsResults.map((row) => (
      <tr key={row._id}>
        <td style={{ fontSize: "1rem", textAlign: "left" }}>
          {questionsResults.indexOf(row) + 1}
        </td>
        <td
          className={cx(classes.createdColumn)}
          style={{ fontSize: "1rem", textAlign: "left" }}
        >
          {/* {row.createdAt} */}
          {/* {new Date(row.createdAt).toLocaleDateString()} */}
          {new Date(row.createdAt).toLocaleString(undefined, {
            dateStyle: "medium",
            timeStyle: "medium",
          })}
        </td>
        <td
          className={cx(classes.accountLevelColumn)}
          style={{ fontSize: "1rem", textAlign: "left" }}
        >
          {row.questionLevel}
        </td>
        <td
          className={cx(classes.questionColumn)}
          style={{ fontSize: "1rem", textAlign: "left" }}
        >
          {row.title}
        </td>
        <td>
          <Center>
            <ActionIcon
              onClick={() => {
                setCheck(!check);
                handleAnswerData(row.answeredBy);
              }}
            >
              <HiOutlineArrowNarrowRight size={22} color={Colors.primary} />
            </ActionIcon>
          </Center>
        </td>
      </tr>
    ))
  );

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
              Question Level
            </th>
            <th style={{ fontSize: "1.1rem", textAlign: "left" }}>
              Question Title
            </th>
            <th style={{ fontSize: "1.1rem", textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
};

export default AllQuestions;
