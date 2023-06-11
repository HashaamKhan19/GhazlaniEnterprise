import { Group, Paper, Text } from "@mantine/core";
import ReactApexChart from "react-apexcharts";
import Colors from "../../../../utils/Colors";

/*eslint-disable*/
const QuestionsChart = ({ colors, series, labels }) => {
  const state = {
    series: series,
    options: {
      colors: colors,
      chart: {
        type: "bar",
        height: 250,
        zoom: {
          enabled: true,
        },
        toolbar: {
          show: false,
        },
      },
      dataLabels: { enabled: false },

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
    <Paper bg={Colors.primary} shadow="lg" mt={"xl"} p={"lg"} radius="lg">
      <Group position="apart" mb={"1rem"}>
        <Text fw={500} size={"xl"} pl={"1rem"} c={Colors.white}>
          Questions Graph
        </Text>
      </Group>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={250}
      />
    </Paper>
  );
};

export default QuestionsChart;
