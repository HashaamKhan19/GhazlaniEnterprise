import React from "react";
import AttendanceChart from "./charts/AttendanceChart";

const Dashboard = () => {
  const colors = ["#b0bde8", "#c4ceee", "#d7def3", "#ebeef9", "#ffffff"];
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
  const lineColor = "#3b5cc7";

  return (
    <div
      style={{
        paddingTop: "10px",
      }}
    >
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
