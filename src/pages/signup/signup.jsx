import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, Typography, Link, Box} from "@mui/material";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Logo from "../../components/hero/Logo";
import SignupForm from "../../components/hero/SignupForm";

//////////////////////////////////
const RootStyle = styled("div")({
  background: "rgb(249, 250, 251)",
  height: "100vh",
  display: "grid",
  placeItems: "center",
  // padding: "0 44px",
});


const HeadingStyle = styled(Box)({
  textAlign: "center",
});

const ContentStyle = styled(Box)({
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
    y: 40,
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

const Signup = ({ setAuth }) => {
  return (
    <RootStyle>
      <Container maxWidth="sm">
        <ContentStyle>
          <HeadingStyle component={motion.div} {...fadeInUp}>
            <Logo />

            <Typography
              sx={{ color: "text.secondary", fontSize: "0.8rem" }}
              variant="body1"
              fontWeight="bold"
              mb={8}
            >
              Please enter your details to signUP
            </Typography>{" "}
          </HeadingStyle>

          <Box component={motion.div} {...fadeInUp}>
          </Box>

          

          <SignupForm setAuth={setAuth} />

          <Typography
            component={motion.p}
            {...fadeInUp}
            variant="body2"
            align="center"
            sx={{ color: "text.secondary", mt: 2 }}
          >
            By registering, I agree to{" "}
            <Link underline="always" color="text.primary" href="#">
              Terms of Service
            </Link>{" "}
            &{" "}
            <Link underline="always" color="text.primary" href="#">
              Privacy Policy
            </Link>
            .
          </Typography>

          <Typography
            component={motion.p}
            {...fadeInUp}
            variant="body2"
            align="center"
            sx={{ mt: 3 }}
          >
            Have an account?{" "}
            <Link variant="subtitle2" component={RouterLink} to="/login">
              Login
            </Link>
          </Typography>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};

export default Signup;