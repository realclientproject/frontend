import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  ArcElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Box } from "@mui/material";

ChartJS.register(
  ArcElement,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

export default function DonutChart({data}) {
    const languageData = data.reduce((acc, curr) => {
        const language = curr.subject.lang;
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
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#00ff99"]
          }
        ]
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
      <Doughnut data={chartData} options={options} />
    </Box>
  );
}
