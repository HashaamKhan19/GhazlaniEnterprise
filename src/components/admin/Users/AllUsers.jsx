import {
  createStyles,
  Table,
  rem,
  Paper,
  Progress,
  Pagination,
} from "@mantine/core";
import data from "./users";
import ActionIcons from "../../Generic/ActionIcons";
import Colors from "../../../utils/Colors";

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

  const rows = data.map((row) => (
    <tr key={row.id}>
      <td>
        <img
          src={row.image}
          alt={row.name}
          style={{ width: 36, height: 36, borderRadius: "50%" }}
        />
      </td>
      <td>{row.name}</td>
      <td className={cx(classes.emailColumn)}>{row.email}</td>
      <td className={cx(classes.attendanceColumn)}>
        <Progress
          value={row.attendance}
          label={row.attendance + "%"}
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
        {row.accountLevel}
      </td>
      <td>
        <ActionIcons />
      </td>
    </tr>
  ));

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
    </Paper>
  );
}
