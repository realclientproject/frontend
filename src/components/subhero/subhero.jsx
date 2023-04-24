import React from "react";
import img1 from "./img1.svg";
import img2 from "./img2.svg";
import img3 from "./img3.svg";
import { Button, useMediaQuery } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Box, positions } from "@mui/system";
import CustomButton from "../hero/custombutton";
export default function SubHero() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        margin: "50px",
        "@media (max-width: 1260px)": {
          display: "flex",
          justifyContent: "space-around",
          columnGap: "40px",
          flexWrap: "wrap",
        },
      }}
    >
      <Box
        sx={{
          width: "40%",
          "@media (max-width: 960px)": {
            height: "20%",
            fontSize: "25px",
            width: "60%",
            marginBottom: "10px",
          },
          "@media (max-width: 600px)": {
            height: "10%",
            fontSize: "15px",
            width: "80%",
          },
          "::after": {
            content: `url(${img2})`,
            position: "relative",
            zIndex: 100000,
            top: "-250px",
            width: "10%",
            left: "90px",
            height: "10%",
            "@media (max-width: 600px)": {
              display: "none",
            },
            "@media (max-width: 1160px)": {
              bottom: "150px",
              width: "7%",
              left: "0px",
              height: "7%",
            },
          },
        }}
      >
        <img
          src={img1}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
          alt="Image 1"
        />
      </Box>

      <Box
        sx={{
          fontFamily: "Roboto,Helvetica,Arial,sans-serif",
          width: "40%",
          "@media (max-width: 600px)": {
            height: 100,
            fontSize: "20px",
            width: "80%",
          },
          "@media (max-width: 960px)": {
            height: 100,
            fontSize: "25px",
            width: "60%",
          },
        }}
      >
        <Typography
          component="h2"
          variant="h2"
          sx={{
            marginBottom: "40px",
            fontSize: "40px",
          }}
        >
          Elevate your teaching with innovative training{" "}
          <span style={{ color: "#FFA500" }}> methods </span>
        </Typography>
        <p style={{ lineHeight: "30px", letterSpacing: "2px" }}>
          Welcome to our website! Our main mission is to support newly graduated
          teachers and individuals interested in the field of education in
          finding professional jobs. We understand that embarking on a teaching
          career can be both exciting and challenging, and we are here to help
          ease the process. Our team is dedicated to providing valuable
          resources, job search tips, and guidance to assist you in navigating
          the competitive job market and securing your dream teaching position.
          We are passionate about education and are committed to empowering
          educators by connecting them with meaningful employment opportunities.
          Join us on this journey to kickstart your teaching career.
        </p>
        <CustomButton
          buttonText="Learn more"
          backgroundColor="#0D7590"
          color="#fff"
          margin="10px 0 0 0"
        ></CustomButton>
      </Box>
    </Box>
  );
}
