import { Card, CardMedia, Typography } from "@mui/material";
import { Box, minHeight } from "@mui/system";
import React from "react";
import Jeffry from "../../images/Jeffry.png";

export default function TeacherCard({ teacher }) {
  return (
    <div className="teacherCard">
      <Box sx={styles.card}>
        <img src={Jeffry} style={styles.teacherImage} />
      </Box>
      <Box sx={styles.subcard}>
        <Typography variant="h3" sx={styles.name}>
          {teacher.Name}
        </Typography>
        <Typography variant="h4" sx={styles.subject}>
          {teacher.Subject} Teacher
        </Typography>
        <Typography>{teacher.Experience}</Typography>
      </Box>
    </div>
  );
}

const styles = {
  card: {
    display: "flex",
    justifyContent: "center",
    bgcolor: "#0D7590",
  },
  subcard: {
    backgroundColor: "white",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    display: "flex",
    flexDirection: "column",
    padding: 3,
    gap: 2,
    alignItems: "center",
    paddingBlock: 4,
    // position: "absolute",
    // marginTop: -10,
    // top: "100%",
    // left: "50%",
    margin: "auto",
    transform: "translateY(-40%)",
    width: "70%",
  },
  name: {
    fontSize: 40,
    fontWeight: "700",
  },
  subject: {
    color: "#FFA500",
    fontSize: 24,
  },
  teacherImage: {
    height: "100%",
    maxWidth: "354px",
    alignSelf: "center",
  },
};
