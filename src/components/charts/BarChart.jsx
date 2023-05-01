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
  return <Chart type="bar" data={chartData} />;
}
