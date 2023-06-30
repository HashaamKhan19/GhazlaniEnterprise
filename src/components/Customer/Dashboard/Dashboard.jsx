import React, { useContext, useEffect, useState } from "react";
import AttendanceChart from "./charts/AttendanceChart";
import Colors from "../../../utils/Colors";
import Statistics from "./Statistics";
import Tasks from "./Tasks";
import { SimpleGrid } from "@mantine/core";
import Calendar from "./Calendar";
import QuestionsChart from "./charts/QuestionsChart";
import { AuthContext } from "../../../context/authContext";

const Dashboard = () => {
  const [attendanceArray, setAttendanceArray] = useState([]);
  const auth = useContext(AuthContext);
  useEffect(() => {
    fetch("http://localhost:3000/api/users/monthlyAttendance/2023", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + auth.token,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        const newArray = new Array(12);
        for (let i = 0; i < 12; ++i) newArray[i] = 0;

        result?.monthlyAttendance?.map((item) => {
          newArray[item.month - 1] = item.attendanceCount;
        });
        setAttendanceArray(newArray);
      });
  }, [auth.token]);
  const colors = [Colors.secondary, "#c4ceee", "#d7def3", "#ebeef9", "#ffffff"];
  const series = [{ name: "Attendance", data: attendanceArray }];
  const QuestionSeries = [{ name: "Questions", data: [1, 2, 3, 4, 5, 6, 7] }];

  const QuestionLabels = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Novemeber",
    "December",
  ];
  const lineColor = Colors.secondary;

  return (
    <div
      style={{
        paddingTop: "10px",
      }}
    >
      <Statistics />
      <div
        style={{
          width: "99.9%",
        }}
      >
        <AttendanceChart colors={colors} series={series} labels={labels} lineColor={lineColor} />
      </div>
      <SimpleGrid
        cols={2}
        breakpoints={[
          { maxWidth: 700, cols: 1 },
          { maxWidth: 500, cols: 1 },
        ]}
        pt={"xl"}
      >
        {/* <QuestionsChart
          colors={colors}
          series={QuestionSeries}
          labels={QuestionLabels}
          lineColor={lineColor}
        /> */}
        {/* <Tasks /> */}
      </SimpleGrid>
      <br />
    </div>
  );
};

export default Dashboard;
