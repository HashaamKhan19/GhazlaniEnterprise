import {
  createStyles,
  Table,
  rem,
  Paper,
  Progress,
  Pagination,
  Center,
  Loader,
  Text,
} from "@mantine/core";
import data from "./users";
import ActionIcons from "../../Generic/ActionIcons";
import Colors from "../../../utils/Colors";
import { useEffect, useState } from "react";
import axios from "axios";

const useStyles = createStyles((theme) => ({
  header: {
    position: "sticky",
    top: 0,
    backgroundColor: Colors.white,
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
  emailColumn: {
    minWidth: "150px",
    width: "20%",
  },
  attendanceColumn: {
    minWidth: "230px",
  },
}));

export default function AllUsers() {
  const { classes, cx } = useStyles();

  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios.get("http://localhost:3000/api/users/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setUsersData(result?.data);
      setLoading(false);
    };
    fetchData();
  }, []);

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
  ) : usersData?.data?.users?.length === 0 ? (
    <tr>
      <td colSpan="12">
        <Center>
          <Text>No users found</Text>
        </Center>
      </td>
    </tr>
  ) : (
    usersData?.data?.users?.map((row) => (
      <tr key={row?._id}>
        <td>
          <img
            src={row.image || "https://i.imgur.com/1qZ0W0S.png"}
            alt={row.name}
            style={{ width: 36, height: 36, borderRadius: "50%" }}
          />
        </td>
        <td>{row.name}</td>
        <td className={cx(classes.emailColumn)}>{row.email}</td>
        <td className={cx(classes.attendanceColumn)}>
          <Progress
            value={row.attendancePercentage}
            label={row.attendancePercentage + "%"}
            size="xl"
            radius="xl"
            color={Colors.secondary}
            styles={{
              label: {
                color: Colors.black,
              },
            }}
          />
        </td>
        <td
          style={{
            textAlign: "center",
          }}
        >
          {row.currentLevel}
        </td>
        <td>
          <ActionIcons
            id={row._id}
            name={row.name}
            email={row.email}
            image={row.image}
            attendancePercentage={row.attendancePercentage}
            currentLevel={row.currentLevel}
            blocked={row.blocked}
            role={row.role}
          />
        </td>
      </tr>
    ))
  );

  return (
    <Paper my={"xs"} radius={"md"} p={"xs"}>
      <div className={cx(classes.table)}>
        <Table>
          <thead className={cx(classes.header)}>
            <tr>
              <th style={{ fontSize: "1.1rem", color: Colors.main }}>Image</th>
              <th style={{ fontSize: "1.1rem", color: Colors.main }}>
                Username
              </th>
              <th style={{ fontSize: "1.1rem", color: Colors.main }}>Email</th>
              <th style={{ fontSize: "1.1rem", color: Colors.main }}>
                Attendance
              </th>
              <th style={{ fontSize: "1.1rem", textAlign: "center" }}>
                Account Level
              </th>
              <th
                style={{
                  fontSize: "1.1rem",
                  textAlign: "center",
                  color: Colors.main,
                }}
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </div>
      {loading ? null : usersData?.data?.users?.length === 0 ? null : (
        <Pagination
          total={10}
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
        />
      )}
    </Paper>
  );
}
