import React from "react";
import AttendanceChart from "./charts/AttendanceChart";
import Colors from "../../../utils/Colors";
import Statistics from "./charts/Statistics";

const Dashboard = () => {
  const colors = [Colors.secondary, "#c4ceee", "#d7def3", "#ebeef9", "#ffffff"];
  const series = [
    { name: "Attendance", data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100] },
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
      <AttendanceChart
        colors={colors}
        series={series}
        labels={labels}
        lineColor={lineColor}
      />
    </div>
  );
};

export default Dashboard;
