import { Button, styled } from "@mui/material";
import React from "react";

const CustomButton = ({
  backgroundColor,
  color,
  buttonText,
  heroBtn,
  guideBtn,
  getStartedBtn,
  fontSize,
  width,
  height,
}) => {
  const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: backgroundColor,
    marginLeft: "5px",
    color: color,
    fontWeight: "700",
    fontSize: "13px",
    width: width,
    height: height,
    cursor: "pointer",
    padding: "0.5rem 1.25rem",
    borderRadius: "7px",
    textTransform: "none",
    display: "block",
    border: "2px solid #0D7590",
    "&:hover": {
      backgroundColor: color,
      color: backgroundColor,
      borderColor: backgroundColor,
    },
    [theme.breakpoints.down("lg")]: {
      margin: (heroBtn || getStartedBtn) && theme.spacing(1, "auto", 2, 2),
      height: "50px",
      width: guideBtn && "90%",
      fontSize: "11px",
    },
    [theme.breakpoints.down("md")]: {
      margin: (heroBtn || getStartedBtn) && theme.spacing(1, "auto", 2, 2),
      height: "50px",
      width: guideBtn && "80%",
      fontSize: "10.5px",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: guideBtn && theme.spacing(5),
      margin: (heroBtn || getStartedBtn) && theme.spacing(1, "auto", 2, 1),
      width: guideBtn && "70%",
      height: "50px",
      fontSize: "8.5px",
    },
  }));

  return <CustomButton>{buttonText}</CustomButton>;
};

export default CustomButton;
