import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, Typography, Link, Box} from "@mui/material";
import styled from "@emotion/styled";
// import LoginForm from "./components/LoginForm.jsx";
// import SocialAuth from "../components/SocialAuth";
import { motion } from "framer-motion";
import LoginForm from "../../components/hero/LoginForm";
import Logo from "../../components/hero/Logo";

//////////////////////////////////
const RootStyle = styled("div")({
  background: "rgb(249, 250, 251)",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

const HeadingStyle = styled(Box)({
  textAlign: "center",
});

const ContentStyle = styled("div")({
  maxWidth: 480,
  padding: 44,
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  background: "#fff",
});

let easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const AdminLogin = ({ setAuth }) => {
  return (
    <RootStyle>
      <Container maxWidth="sm">
        <ContentStyle>
          <HeadingStyle component={motion.div} {...fadeInUp}>
            <Logo sx={{ mt: 3 }} />
            <Typography sx={{ mt: 3, mb: 1 }} variant="h3" fontWeight="bold">
              Admin panel
            </Typography>
            <Typography
              sx={{ color: "text.secondary", fontSize: "0.8rem" }}
              variant="body1"
              fontWeight="bold"
              mb={5}
            >
              Control Panel login
            </Typography>{" "}
          </HeadingStyle>

          <Box component={motion.div} {...fadeInUp}>
            {/* <SocialAuth /> */}
          </Box>

          <LoginForm setAuth={setAuth} />
{/*  */}
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};

export default AdminLogin;
