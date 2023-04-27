import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import FaceIcon from "@mui/icons-material/Face";
import { Stack } from "@mui/system";
import "./Header.css";

export default function BasicTextFields({ title = "Dashboard" }) {
  return (
    <Box sx={styles.Header_container}>
      <Stack
        sx={styles.Stack}
        direction="row"
        width="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <h1 style={styles.title}>{title}</h1>
        <NotificationsNoneIcon fontSize="medium" />
      </Stack>
    </Box>
  );
}

const styles = {
    Header_container :{
        width: "100%",
        height: "80px",
        
    },
    
    Stack :{
        padding: "10px",
    },
    
    title: {
        color: "#001627",
    },
};
