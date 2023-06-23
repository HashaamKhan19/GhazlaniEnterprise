import React from "react";
import AttendanceChart from "./charts/AttendanceChart";
import Colors from "../../../utils/Colors";
import Statistics from "./Statistics";
import Tasks from "./Tasks";
import { SimpleGrid } from "@mantine/core";
import Calendar from "./Calendar";
import QuestionsChart from "./charts/QuestionsChart";

const Dashboard = () => {
  const colors = [Colors.secondary, "#c4ceee", "#d7def3", "#ebeef9", "#ffffff"];
  const series = [{ name: "Attendance", data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100] }];
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
        <QuestionsChart
          colors={colors}
          series={QuestionSeries}
          labels={QuestionLabels}
          lineColor={lineColor}
        />
        <Tasks />
      </SimpleGrid>
      <br />
    </div>
  );
};

export default Dashboard;
