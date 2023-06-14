import { Box, Button, styled, Typography } from "@mui/material";
import { Container, display } from "@mui/system";
import React from "react";
import img1 from "./img1.svg";
import img2 from "./img1.svg";
import img3 from "./img1.svg";

import CustomButton from "../hero/custombutton";
function Hero() {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: "theme",
    marginTop: theme.spacing(0),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      fontSize: "15px",
    },
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      gap: "10px",
      margin: "0px 40px 0px 40px",
      textAlign: "center",
      fontSize: "17px",
    },
  }));
  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "normal",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "25px",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "80vh",     py: 10,
  }}>
      <Container>
        <CustomBox>
          <Box
            sx={{
              flex: "2",
              marginRight: "50px",

              "@media (max-width: 660px)": {
                display: "none",
              },
            }}
          >
            <img
              src={img2}
              alt="heroImg"
              style={{
                maxWidth: "100%",
                marginBottom: "2rem",
                marginLeft: "20px",
              }}
            />
          </Box>
          <Box sx={{ flex: "4", left: "0" }}>
            <Title variant="h2" sx={{ color: "black" }}>
              Elevate your teaching with innovative training{" "}
              <span style={{ color: "#FFA500" }}>methods</span>
            </Title>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#5A6473",
                my: 4,
              }}
            >
              Welcome to our website! Our main mission is to support newly
              graduated teachers and individuals interested in the field of
              education in finding professional jobs. We understand that
              embarking on a teaching career can be both exciting and
              challenging, and we are here to help ease the process. Our team is
              dedicated to providing valuable resources, job search tips, and
              guidance to assist you in navigating the competitive job market
              and securing your dream teaching position. We are passionate about
              education and are committed to empowering educators by connecting
              them with meaningful employment opportunities. Join us on this
              journey to kickstart your teaching career.
            </Typography>
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
}

export default Hero;
