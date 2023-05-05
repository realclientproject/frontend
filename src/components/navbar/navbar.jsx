import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import DropDown from "./DropDown.jsx";
import logo from "./logo.svg";
import CustomButton from "../hero/custombutton.jsx";

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar elevation={0} sx={{ backgroundColor: "#e6f0fe" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo in Resp Mode */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            // href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img style={{ height: "100px" }} alt="Remy Sharp" src={logo} />
          </Typography>
          {/* Links Resp Mode */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {/* Mobile resp */}
              <Link to="/login">
                <CustomButton
                  backgroundColor="#0D7590"
                  color="#fff"
                  buttonText="Login"
                  heroBtn={true}
                  display="block"
                />
              </Link>
              <Link to="/signup">
                <CustomButton
                  backgroundColor="#0D7590"
                  color="#fff"
                  buttonText="Register now"
                  heroBtn={true}
                  display="block"
                />
              </Link>
              {/* Mobile resp */}
              <Button sx={{ my: 2, color: "black", display: "block" }}>
                <Link style={{ textDecoration: "none", color: "black" }} to="/">
                  Home
                </Link>
              </Button>
              <Button>
                <DropDown>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to="/help"
                  >
                    help
                  </Link>
                </DropDown>
              </Button>
              <Button sx={{ my: 2, color: "black", display: "block" }}>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/teachers"
                >
                  Teachers
                </Link>
              </Button>
              <Button sx={{ my: 2, color: "black", display: "block" }}>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/testimonials"
                >
                  testimonials
                </Link>
              </Button>
            </Menu>
          </Box>
          {/* Logo */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            // href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Avatar alt="Remy Sharp" src={logo} />
          </Typography>

          {/* Links */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button sx={{ my: 2, color: "black", display: "block" }}>
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                Home
              </Link>
            </Button>
            <Button>
              <DropDown>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/help"
                >
                  help
                </Link>
              </DropDown>
            </Button>
            <Button sx={{ my: 2, color: "black", display: "block" }}>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/teachers"
              >
                teachers
              </Link>
            </Button>
            <Button sx={{ my: 2, color: "black", display: "block" }}>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/testimonials"
              >
                testimonials
              </Link>
            </Button>

            {/* normal screen */}
            <Box
              sx={{
                flex: "4",
                left: "0",
                display: "flex",
                justifyContent: "end",
              }}
            >
              <Box sx={{ marginRight: "10px" }}>
                <Link to="/login">
                  <CustomButton
                    backgroundColor="#0D7590"
                    color="#fff"
                    buttonText="Login"
                    heroBtn={true}
                    display="block"
                  />
                </Link>
              </Box>
              <Link to="/signup">
                <CustomButton
                  backgroundColor="#0D7590"
                  color="#fff"
                  buttonText="Register now"
                  heroBtn={true}
                  display="block"
                />
              </Link>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
