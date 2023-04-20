import { Box, Button, styled, Typography } from "@mui/material";
import { Container, display } from "@mui/system";
import React from "react";
import heroImg from "./hero_img.svg";
import CustomButton from "./custombutton";
function Hero() {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: "theme",
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));
  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
  }));

  return (
    <Box sx={{ backgroundColor: "#E6F0FF", minHeight: "80vh" }}>
      <Container>
        <CustomBox>
          <Box sx={{ flex: "4", left: "0" }}>
            <Title variant="h1" sx={{ width: "100%" }}>
              "TeachSupport: Empowering Educators to Achieve{" "}
              <Title sx={{ color: "#FFA500" }} variant="h1">
                “Professional Excellence"?
              </Title>
            </Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
            >
              Online platform that provides teachers with the resources and
              support they need to enhance their skills, develop their careers,
              and connect with top job opportunities in education."
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <CustomButton
                backgroundColor="#0D7590"
                color="#fff"
                buttonText="Join now"
                heroBtn={true}
                display="block"
              />
              <CustomButton
                backgroundColor="#FFFFFF"
                color="#0D7590"
                buttonText="Discover server"
                heroBtn={true}
              />
            </Box>
          </Box>

          <Box sx={{ flex: "2" }}>
            <img
              src={heroImg}
              alt="heroImg"
              style={{
                maxWidth: "100%",
                marginBottom: "2rem",
              }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
}

export default Hero;
