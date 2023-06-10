// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import { Link, useNavigate, NavLink } from "react-router-dom";
// import {
//   AvatarGroup,
//   ListItemIcon,
//   ListItemText,
//   Popover,
// } from "@mui/material";
// import Profile from "@mui/icons-material/PersonOutlineOutlined";

// // import Tooltip from "@mui/material/Tooltip";
// // import { Button, Grid } from "@mui/material";

// import logo from "./logo.svg";
// import CustomButton from "../hero/custombutton.jsx";
// import { Help, Logout, Person } from "@mui/icons-material";

// const pages = ["Home", "Lessons", "Quizzes", "about"];

// function NavBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [isUser, setisUser] = React.useState(
//     JSON.parse(localStorage.getItem("user"))
//   );

//   const navigate = useNavigate();
//   const removeData = () => {
//     localStorage.removeItem("user");
//     navigate("/login");
//   };
//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };
//   function handleClick(event) {
//     setAnchorEl(event.currentTarget);
//   }
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   const navigateHelp = () => {
//     navigate("/help");
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? "simple-popover" : undefined;

//   return (
//     <AppBar elevation={0} sx={{ backgroundColor: "#e6f0fe" }} position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           {/* Logo in Resp Mode */}
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             // href="/"
//             sx={{
//               mr: 2,
//               display: { xs: "none", md: "flex" },
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             <NavLink style={styles.link} to="/">
//               <img
//                 style={{
//                   maxHeight: "80px",
//                   width: "auto",
//                   marginRight: "14px",
//                 }}
//                 alt="Support Teacher Logo"
//                 src={logo}
//               />
//             </NavLink>
//           </Typography>
//           {/* Links Resp Mode */}
//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="black"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: "block", md: "none" },
//               }}
//             >
//               {/* Mobile resp */}

//               {/* Mobile resp */}
//               <>
//                 {isUser ? (
//                   <IconButton
//                   onClick={handleClick}
//                   size="large"
//                   aria-controls={open ? "account-menu" : undefined}
//                   aria-haspopup="true"
//                   aria-expanded={open ? "true" : undefined}
//                 >
//                   <Profile sx={styles.profile} />
//                 </IconButton>) : (
//                   <Button sx={{ my: 2, color: "black", display: "block" }}>
//                     <NavLink
//                       style={styles.link}
//                       // style={{ textDecoration: "none", color: "black" }}
//                       to="/login"
//                     >
//                       Login
//                     </NavLink>
//                   </Button>
//                 )}
//               </>

//               <Button sx={{ my: 2, color: "black", display: "block" }}>
//                 <NavLink
//                   style={styles.link}
//                   // style={{ textDecoration: "none", color: "black" }}
//                   to="/"
//                 >
//                   Home
//                 </NavLink>
//               </Button>
//               {/* <Button sx={{ my: 2, color: "black", display: "block" }}>
//                 <NavLink style={styles.link}
//                   style={{ textDecoration: "none", color: "black" }}
//                   to="/teachers"
//                 >
//                   Teachers
//                 </NavLink>
//               </Button> */}
//               <Button sx={{ my: 2, color: "black", display: "block" }}>
//                 <NavLink
//                   style={styles.link}
//                   // style={{ textDecoration: "none", color: "black" }}
//                   to="/lessons"
//                 >
//                   Lessons
//                 </NavLink>
//               </Button>
//               <Button sx={{ my: 2, color: "black", display: "block" }}>
//                 <NavLink
//                   style={styles.link}
//                   // style={{ textDecoration: "none", color: "black" }}
//                   to="/quizzes"
//                 >
//                   quizzes
//                 </NavLink>
//               </Button>
//             </Menu>
//           </Box>
//           {/* Logo */}
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             // href=""
//             sx={{
//               mr: 2,
//               display: { xs: "flex", md: "none" },
//               flexGrow: 1,
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             <Avatar alt="Remy Sharp" src={logo} />
//           </Typography>

//           {/* NavLinks */}
//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             <Button sx={{ my: 2, color: "black", display: "block" }}>
//               <NavLink
//                 style={styles.link}
//                 // style={{ textDecoration: "none", color: "black" }}
//                 to="/"
//               >
//                 Home
//               </NavLink>
//             </Button>

//             {/* <Button sx={{ my: 2, color: "black", display: "block" }}>
//               <NavLink style={styles.link}
//                 style={{ textDecoration: "none", color: "black" }}
//                 to="/teachers"
//               >
//                 teachers
//               </NavLink>
//             </Button> */}
//             <Button sx={{ my: 2, color: "black", display: "block" }}>
//               <NavLink
//                 style={styles.link}
//                 // style={{ textDecoration: "none", color: "black" }}
//                 to="/lessons"
//               >
//                 Lessons
//               </NavLink>
//             </Button>
//             <Button sx={{ my: 2, color: "black", display: "block" }}>
//               <NavLink
//                 style={styles.link}
//                 // style={{ textDecoration: "none", color: "black" }}
//                 to="/quizzes"
//               >
//                 Quizzes
//               </NavLink>
//             </Button>
//             {/* normal screen */}
//             <Box
//               sx={{
//                 flex: "4",
//                 left: "0",
//                 display: "flex",
//                 justifyContent: "end",
//               }}
//             >
//               <Box sx={{ marginRight: "10px" }}>
//                 <>
//                   {isUser ? (
//                     <>
//                       <Avatar
//                         sx={{ cursor: "pointer" }}
//                         aria-describedby={id}
//                         variant="contained"
//                         onClick={handleClick}
//                       >
//                         {isUser.email[0]}
//                       </Avatar>
//                       <Popover
//                         id={id}
//                         open={open}
//                         anchorEl={anchorEl}
//                         onClose={handleClose}
//                         anchorOrigin={{
//                           vertical: "bottom",
//                           horizontal: "left",
//                         }}
//                         sx={{ mt: 1.5 }}
//                       >
//                         <Typography sx={{ p: 2 }}>{isUser.email}</Typography>{" "}
//                         <Typography sx={{ p: 2 }}>
//                           <Button
//                             onClick={() => {
//                               removeData();
//                             }}
//                           >
//                             Logout
//                           </Button>
//                         </Typography>
//                       </Popover>
//                     </>
//                   ) : (
//                     <Link to="/login">
//                       <CustomButton
//                         backgroundColor="#0D7590"
//                         color="#fff"
//                         buttonText="Login"
//                         heroBtn={true}
//                         display="block"
//                       />
//                     </Link>
//                   )}
//                 </>
//               </Box>
//             </Box>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default NavBar;

import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTheme } from "styled-components";
import { Menu as MenuIcon } from "@mui/icons-material";
import Profile from "@mui/icons-material/PersonOutlineOutlined";

export default function Navbar() {
  const navList = [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "Admins",
      path: "/lessons",
    },
    {
      text: "Users",
      path: "/quizzes",
    },
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDrawerToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar>
      <Stack sx={styles.Stack} direction="row">
        <Stack direction="row" spacing={2}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: ["block", "none"] }}
          >
            <MenuIcon />
          </IconButton>
          <div>
          {navList.map((item) => (
            <NavLink
              to={item.path}
              key={item.path}
              onClick={handleDrawerToggle}
            ></NavLink>
          ))}
          </div>
        </Stack>
        <aside>
          <IconButton
            onClick={handleClick}
            size="large"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Profile sx={styles.profile} />
          </IconButton>
        </aside>
      </Stack>
      <Drawer>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "315px",
          }}
        >
          <Box sx={{ marginX: "14px" }}>
            {navList.map((item) => (
              <ListItem
                button
                component={Link}
                to={item.path}
                key={item.path}
                onClick={handleDrawerToggle}
                style={{
                  color:
                    window.location.pathname === item.path ? "#0D7590" : "",
                }}
              >
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </Box>
        </List>
      </Drawer>
    </AppBar>
  );
}

const drawerWidth = "318px";

const styles = {
  link: ({ isActive, isPending }) => {
    return {
      textDecoration: "none",
      color: isActive ? "#0D7590" : "black",
      fontWeight: isActive ? "bold" : "",
    };
  },
};
