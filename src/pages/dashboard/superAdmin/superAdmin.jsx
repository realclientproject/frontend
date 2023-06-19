import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";
import DonutChart from "../../../components/charts/DonutChart";
import BarChart from "../../../components/charts/BarChart";

export default function SuperAdmin() {
  const [data, setData] = useState([
    {
      _id: "1",
      first_name: "John",
      last_name: "Doe",
      phone: "123-456-7890",
      email: "john.doe@example.com",
      role: "Admin",
      subject: { lang: "arabic" },
    },
    {
      _id: "2",
      first_name: "Jane",
      last_name: "Doe",
      phone: "234-567-8901",
      email: "jane.doe@example.com",
      role: "User",
      subject: { lang: "frensh" },
    },
    {
      _id: "3",
      first_name: "Jane",
      last_name: "Doe",
      phone: "234-567-8901",
      email: "jane.doe@example.com",
      role: "User",
      subject: { lang: "frensh" },
    },
    {
      _id: "4",
      first_name: "Jane",
      last_name: "Doe",
      phone: "234-567-8901",
      email: "jane.doe@example.com",
      role: "User",
      subject: { lang: "english" },
    },
  ]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/user", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((response) => {
        const users = response.data.response.filter(
          (user) => user.role === "user"
        );
        setData(users);
        console.log(response.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-between", marginInline: 4 }}
    >
      <Box
        sx={{
          marginY: "16px",
          padding: "32px",
          border: "1px solid rgba(109, 125, 147, 0.15)",
          boxShadow: "4px 4px 20px -10px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
          bgcolor: "white",
          width: ["100%", "48%"],
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", marginBottom: 8 }}
          marginBottom={1}
        >
          Languages
        </Typography>
        <DonutChart data={data} />
      </Box>
      <Box
        sx={{
          marginY: "16px",
          padding: "32px",
          border: "1px solid rgba(109, 125, 147, 0.15)",
          boxShadow: "4px 4px 20px -10px rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
          bgcolor: "white",
          width: ["100%", "48%"],
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", marginBottom: 8 }}
          marginBottom={1}
        >
          Subjects
        </Typography>
        <BarChart data={data} />
      </Box>
    </Box>
  );
}