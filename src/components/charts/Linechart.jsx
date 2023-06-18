import { Box } from "@mui/system";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const BalanceChart = ({ data }) => {
  const languageData = data.reduce((acc, curr) => {
    const language = curr.language;
    if (acc[language]) {
      acc[language]++;
    } else {
      acc[language] = 1;
    }
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(languageData),
    datasets: [
      {
        fill: true,
        label: "Number of Users",
        data: Object.values(languageData),
        backgroundColor: ["#36A2EB","#FF6384", "#FFCE56", "#00ff99"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Box paddingX={10}>
      <Line data={chartData} options={options} />
    </Box>
  );
};

export default BalanceChart;
