import { Avatar, Card, CardMedia, Typography } from "@mui/material";
import { Box, minHeight } from "@mui/system";
import React from "react";
import Jeffry from "../../images/Jeffry.png";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export default function TestimonailCard({ testimony}) {
  return (
    <Box className="testimonailCard" sx={styles.card} >
      <FormatQuoteIcon />
      <Typography>{testimony.comment}</Typography>
      <Avatar alt={testimony.name} src={Jeffry}/>
      <Typography sx={styles.name}>{testimony.name}</Typography>
    </Box>
  );
}

const styles = {
  card: {
    display: "flex",
    backgroundColor: "rgba(13, 117, 144, 0.03)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    flexDirection: "column",
    padding: 3,
    gap: 2,
    alignItems: "center",
    marginBlock:2,
  },
  name: {
    fontWeight: "700",
  },
};
