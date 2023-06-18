import { Box, Button, styled, Typography } from "@mui/material";
import { Container, display } from "@mui/system";
import React from "react";
import heroImg from "./hero_img.svg";
import CustomButton from "./custombutton";
import { useNavigate } from "react-router-dom";

function Hero() {
  const Navigate = useNavigate();
  const user = localStorage.getItem("user");
  const signup = () => {
    Navigate("/signup");
  };
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
      flexDirection: "row",
      textAlign: "center",
      fontSize: "17px",
    },
  }));
  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000336",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: "25px",
    },
  }));

  return (
    <Box
      sx={{
        backgroundColor: "#E6F0FF",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container sx={{ maxWidth: ["98%", "80%"] }}>
        <CustomBox>
          <Box
            sx={{
              flex: "4",
              left: "0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Title variant="h1" sx={{ color: "black", m: 0 }}>
              "TeachSupport: Empowering Educators to Achieve{" "}
              <Title sx={{ color: "#FFA500" }} variant="h1">
                “Professional Excellence" ?
              </Title>
            </Title>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#5A6473",
                my: 4,
                maxWidth: ["100%", "90%"],
                textAlign: "center",
              }}
            >
              Online platform that provides teachers with the resources and
              support they need to enhance their skills, develop their careers,
              and connect with top job opportunities in education."
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 4,
              }}
            >
              {!user ? (
                <Button
                  size="large"
                  style={{
                    border: "1px solid #0D7590",
                    color: "#0D7590",
                    marginRight: "10px",
                  }}
                  onClick={signup}
                >
                  Join Us
                </Button>
              ) : (
                ""
              )}
            </Box>
          </Box>

          <Box
            sx={{
              flex: "1.5",
              "@media (max-width: 660px)": {
                display: "none",
              },
            }}
          >
            <img
              src={heroImg}
              alt="heroImg"
              style={{
                maxWidth: "500px",
                marginBottom: "2rem",
                marginLeft: "20px",
              }}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
}

export default Hero;
