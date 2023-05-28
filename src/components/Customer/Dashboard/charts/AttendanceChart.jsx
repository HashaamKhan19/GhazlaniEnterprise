import { Group, Paper, Text } from "@mantine/core";
import ReactApexChart from "react-apexcharts";
import Colors from "../../../../utils/Colors";

/*eslint-disable*/
const AttendanceChart = ({ colors, series, labels, lineColor }) => {
  const state = {
    series: series,
    options: {
      colors: colors,
      chart: {
        type: "area",
        height: 350,
        zoom: {
          enabled: true,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: { enabled: false },
      grid: {
        show: true,
        borderColor: "#c4ceee",
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true,
          },
        },
      },

      markers: {
        size: 0,
        colors: lineColor,
        strokeColors: Colors.white,
        strokeWidth: 2,
      },

      stroke: {
        show: true,
        curve: "smooth",
        lineCap: "butt",
        colors: [lineColor],
        width: 3,
        dashArray: 0,
      },

      title: { show: false },
      subtitle: { show: false },
      labels: labels,
      xaxis: {
        labels: {
          style: {
            colors: Colors.white,
            fontSize: "12px",
            fontFamily: "Urbanist",
            fontWeight: 600,
            cssClass: "apexcharts-xaxis-label",
          },
        },
        tooltip: {
          enabled: true,
        },
      },
      yaxis: {
        opposite: false,
        labels: {
          style: {
            colors: Colors.white,
            fontSize: "12px",
            fontFamily: "Urbanist",
            fontWeight: 600,
            cssClass: "apexcharts-xaxis-label",
          },
        },
      },
    },
  };

  return (
    <Paper bg={Colors.primary} shadow="lg" pt={"lg"} radius="lg">
      <Group position="apart" mb={"1rem"}>
        <Text fw={500} size={"xl"} pl={"1rem"} c={Colors.white}>
          Attendance Graph
        </Text>
      </Group>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        height={350}
      />
    </Paper>
  );
};

export default AttendanceChart;
