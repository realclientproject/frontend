import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import Logoimg from "./logoo.png"

const Logo = () => {
  return (
    <Box>
      <Link to="/">
        <Box component="img" src={Logoimg} alt="logo" sx={{ width: '200px', height: '100px' }} />
      </Link>
    </Box>
  );
};

export default Logo;
