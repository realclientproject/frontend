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
import MenuItem from "@mui/material/MenuItem";
import { Link, useNavigate } from "react-router-dom";
import { AvatarGroup, Popover } from "@mui/material";

// import Tooltip from "@mui/material/Tooltip";
// import { Button, Grid } from "@mui/material";

import logo from "./logo.svg";
import CustomButton from "../hero/custombutton.jsx";
import { Person } from "@mui/icons-material";

const pages = ["Home", "Lessons", "Quizzes", "teachers", "about"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isUser, setisUser] = React.useState(
    JSON.parse(localStorage.getItem("user"))
  );

  const navigate = useNavigate();
  const removeData = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <AppBar sx={{ backgroundColor: "#e6f0fe" }} position="static">
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
            <Avatar
              viewBox="0 0 100 100"
              sx={{ height: "auto", width: "auto", p: 0, marginRight: 50 }}
              alt="Remy Sharp"
              src={logo}
            />
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

              {/* Mobile resp */}
              <>
                {isUser ? (
                  <Avatar
                    sx={{ ml: 1, bgcolor: "#0D7590" }}
                    onClick={handleClick}
                  />
                ) : (
                  <Button sx={{ my: 2, color: "black", display: "block" }}>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/login"
                    >
                      Login
                    </Link>
                  </Button>
                )}
              </>

              <Button sx={{ my: 2, color: "black", display: "block" }}>
                <Link style={{ textDecoration: "none", color: "black" }} to="/">
                  Home
                </Link>
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
                  to="/lessons"
                >
                  Lessons
                </Link>
              </Button>
              <Button sx={{ my: 2, color: "black", display: "block" }}>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  to="/quizzes"
                >
                  quizzes
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
                to="/lessons"
              >
                Lessons
              </Link>
            </Button>
            <Button sx={{ my: 2, color: "black", display: "block" }}>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/quizzes"
              >
                Quizzes
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
                <>
                  {isUser ? (
                    <>
                      <Avatar
                        sx={{ cursor: "pointer" }}
                        aria-describedby={id}
                        variant="contained"
                        onClick={handleClick}
                      >
                        {isUser.email[0]}
                      </Avatar>
                      <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "left",
                        }}
                      >
                        <Typography sx={{ p: 2 }}>{isUser.email}</Typography>{" "}
                        <Typography sx={{ p: 2 }}>
                          <Button
                            onClick={() => {
                              removeData();
                            }}
                          >
                            Logout
                          </Button>
                        </Typography>
                      </Popover>
                    </>
                  ) : (
                    <Link to="/login">
                      <CustomButton
                        backgroundColor="#0D7590"
                        color="#fff"
                        buttonText="Login"
                        heroBtn={true}
                        display="block"
                      />
                    </Link>
                  )}
                </>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
