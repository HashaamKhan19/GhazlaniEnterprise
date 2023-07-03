import {
  ActionIcon,
  Center,
  Loader,
  Pagination,
  Paper,
  Table,
  createStyles,
  rem,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Colors from "../../../utils/Colors";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const AllQuestions = ({ check, setCheck, answerData, setAnswerData }) => {
  const useStyles = createStyles((theme) => ({
    header: {
      position: "sticky",
      top: 0,
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
      transition: "box-shadow 150ms ease",

      "&::after": {
        content: '""',
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        borderBottom: `${rem(1)} solid ${
          theme.colorScheme === "dark" ? theme.colors.dark[3] : theme.colors.gray[2]
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
      minWidth: "220px",
    },
  }));

  const { classes, cx } = useStyles();

  const [loading, setLoading] = useState(false);
  const [questionsResults, setQuestionsResults] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/questions?limit=${limit}&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setTotalPages(Math.ceil(result?.data?.totalDocs / limit));
      setQuestionsResults(result?.data?.data?.questions);
      setLoading(false);
    };
    fetchData();
  }, [limit, page]);

  const handleAnswerData = (data) => {
    setAnswerData(data);
  };

  const rows = loading ? (
    <tr>
      <td colSpan="12">
        <Center>
          <Loader size={"md"} variant="dots" my={"xl"} color={Colors.secondary} />
        </Center>
      </td>
    </tr>
  ) : (
    questionsResults.map((row) => (
      <tr key={row._id}>
        <td style={{ fontSize: "1rem", textAlign: "left" }}>{questionsResults.indexOf(row) + 1}</td>
        <td className={cx(classes.createdColumn)} style={{ fontSize: "1rem", textAlign: "left" }}>
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
        <td className={cx(classes.questionColumn)} style={{ fontSize: "1rem", textAlign: "left" }}>
          {row.title}
        </td>
        <td className={cx(classes.questionColumn)} style={{ fontSize: "1rem", textAlign: "left" }}>
          {row.question}
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
    <Paper my={"xs"} radius={"md"} p={"xs"}>
      <div className={cx(classes.table)}>
        <Table miw={700} highlightOnHover>
          <thead className={cx(classes.header)}>
            <tr>
              <th style={{ fontSize: "1.1rem", textAlign: "left" }}>ID</th>
              <th style={{ fontSize: "1.1rem", textAlign: "left" }}>Created On</th>
              <th style={{ fontSize: "1.1rem", textAlign: "left" }}>Question Level</th>
              <th style={{ fontSize: "1.1rem", textAlign: "left" }}>Question Title</th>
              <th style={{ fontSize: "1.1rem", textAlign: "left" }}>Question</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </div>
      {loading ? null : questionsResults?.length === 0 ? null : (
        <Pagination
          position="right"
          pr={"xl"}
          styles={(theme) => ({
            control: {
              "&[data-active]": {
                backgroundImage: theme.fn.gradient({
                  from: Colors.main,
                  to: Colors.main,
                }),
              },
            },
            dots: {
              color: Colors.secondary,
            },
          })}
          mt={"xl"}
          total={totalPages}
          value={page}
          onChange={setPage}
        />
      )}
    </Paper>
  );
};

export default AllQuestions;
