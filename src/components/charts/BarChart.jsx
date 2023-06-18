import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import { Box } from "@mui/material";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

export default function BarChart({ data }) {
  const subjectData = data.reduce((acc, curr) => {
    const subject = curr.subject;
    if (acc[subject]) {
      acc[subject]++;
    } else {
      acc[subject] = 1;
    }
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(subjectData),
    datasets: [
      {
        fill: true,
        label: "Number of Users",
        data: Object.values(subjectData),
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#00ff99"],
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
      <Chart type="bar" data={chartData} />
    </Box>
  );
}
