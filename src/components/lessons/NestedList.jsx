import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export default function NestedList() {
  const [openMath, setOpenMath] = React.useState(false);
  const [openFrench, setOpenFrench] = React.useState(false);
  const [openArabic, setOpenArabic] = React.useState(false);
  const [openChemistry, setOpenChemistry] = React.useState(false);
  const [openPhysics, setOpenPhysics] = React.useState(false);
  const [openBiology, setOpenBiology] = React.useState(false);
  const [openHistory, setOpenHistory] = React.useState(false);
  const [openGeometry, setOpenGeometry] = React.useState(false);
  const [openCalculus, setOpenCalculus] = React.useState(false);
  const [openAlgebra, setOpenAlgebra] = React.useState(false);

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const handleClickMath = () => {
    setOpenMath(!openMath);
  };

  const handleFrenchClick = () => {
    setOpenFrench(!openFrench);
  };

  const handleArabicClick = () => {
    setOpenArabic(!openArabic);
  };

  const handleChemistryClick = () => {
    setOpenChemistry(!openChemistry);
  };

  const handlePhysicsClick = () => {
    setOpenPhysics(!openPhysics);
  };

  const handleBiologyClick = () => {
    setOpenBiology(!openBiology);
  };

  const handleHistoryClick = () => {
    setOpenHistory(!openHistory);
  };

  const handlClickGeometry = () => {
    setOpenGeometry(!openGeometry);
  };

  const handleClickCalculus = () => {
    setOpenCalculus(!openCalculus);
  };
  const handleClickAlgebra = () => {
    setOpenAlgebra(!openAlgebra);
  };

  const ListItem = styled("li")({});

  const ChapterTitle = styled(Typography)({
    fontSize: "1.2rem",
    fontWeight: "bold",
  });

  const ChapterSubtitle = styled(ListItemText)({
    fontSize: "1rem",
  });

  const MainTitle = styled(Typography)({});

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: "360px",
        bgcolor: "#e6f0fe",
        border: "1px solid grey",
        borderRadius: "4px",
        marginLeft: isMobile ? "0" : "2rem",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListSubheader component="div" id="nested-list-subheader">
        Table of Contents{" "}
      </ListSubheader>

      <ListItemButton onClick={handleClickMath} sx={{ pl: 4 }}>
        <ListItemText primary="Math Lessons" />
        {openMath ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openMath} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 8 }} onClick={handleClickAlgebra}>
            <ListItemText secondary="Algebra" />
            {openAlgebra ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openAlgebra} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ul
                style={{
                  listStyleType: "none",
                  margin: 0,
                  padding: 0,
                  textAlign: "left",
                }}
              >
                <li>
                  <ListItemButton
                    component={Link}
                    to="/algebra/chapter1"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 1: Solving Linear Equations" />
                  </ListItemButton>
                </li>
                <li>
                  <ListItemButton
                    component={Link}
                    to="/algebra/chapter2"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 2: Graphing Linear Functions" />
                  </ListItemButton>
                </li>
                <li>
                  <ListItemButton
                    component={Link}
                    to="/algebra/chapter3"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 3: Factoring Quadratic Equations" />
                  </ListItemButton>
                </li>
                <li>
                  <ListItemButton
                    component={Link}
                    to="/algebra/chapter4"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 4: Solving Systems of Equations" />
                  </ListItemButton>
                </li>
                <li>
                  <ListItemButton
                    component={Link}
                    to="/algebra/chapter5"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 5: Simplifying Rational Expressions" />
                  </ListItemButton>
                </li>
              </ul>
            </List>
          </Collapse>
          <ListItemButton sx={{ pl: 8 }} onClick={handleClickCalculus}>
            <ListItemText secondary="Calculus" />
            {openCalculus ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openCalculus} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ul
                style={{
                  listStyleType: "none",
                  margin: 0,
                  padding: 0,
                  textAlign: "left",
                }}
              >
                <li>
                  <ListItemButton
                    component={Link}
                    to="/Calculus/chapter1"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 1: Solving Linear Equations" />
                  </ListItemButton>
                </li>
                <li>
                  <ListItemButton
                    component={Link}
                    to="/Calculus/chapter2"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 2: Graphing Linear Functions" />
                  </ListItemButton>
                </li>
                <li>
                  <ListItemButton
                    component={Link}
                    to="/Calculus/chapter3"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 3: Factoring Quadratic Equations" />
                  </ListItemButton>
                </li>
                <li>
                  <ListItemButton
                    component={Link}
                    to="/Calculus/chapter4"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 4: Solving Systems of Equations" />
                  </ListItemButton>
                </li>
                <li>
                  <ListItemButton
                    component={Link}
                    to="/Calculus/chapter5"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 5: Simplifying Rational Expressions" />
                  </ListItemButton>
                </li>
              </ul>
            </List>
          </Collapse>

          <ListItemButton sx={{ pl: 8 }} onClick={handlClickGeometry}>
            <ListItemText secondary="Geometry" />
            {openGeometry ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openGeometry} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ul
                style={{
                  listStyleType: "none",
                  margin: 0,
                  padding: 0,
                  textAlign: "left",
                }}
              >
                <li>
                  <ListItemButton
                    component={Link}
                    to="/Geometry/chapter1"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 1: Solving Linear Equations" />
                  </ListItemButton>
                </li>
                <li>
                  <ListItemButton
                    component={Link}
                    to="/Geometry/chapter2"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 2: Graphing Linear Functions" />
                  </ListItemButton>
                </li>
                <li>
                  <ListItemButton
                    component={Link}
                    to="/Geometry/chapter3"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 3: Factoring Quadratic Equations" />
                  </ListItemButton>
                </li>
                <li>
                  <ListItemButton
                    component={Link}
                    to="/Geometry/chapter4"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 4: Solving Systems of Equations" />
                  </ListItemButton>
                </li>
                <li>
                  <ListItemButton
                    component={Link}
                    to="/Geometry/chapter5"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 5: Simplifying Rational Expressions" />
                  </ListItemButton>
                </li>
              </ul>
            </List>
          </Collapse>
        </List>
      </Collapse>
      {/* //////////////////////////////////        */}
      <ListItemButton onClick={handleArabicClick} sx={{ pl: 4 }}>
        <ListItemText primary="Arabic Lessons" />
        {openMath ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openArabic} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 8 }} onClick={handleClickAlgebra}>
            <ListItemText secondary="Arabic" />
            {openAlgebra ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openAlgebra} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ul
                style={{
                  listStyleType: "none",
                  margin: 0,
                  padding: 0,
                  textAlign: "left",
                }}
              >
                <li>
                  <ListItemButton
                    component={Link}
                    to="/algebra/chapter1"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 1: Solving Linear Equations" />
                  </ListItemButton>
                </li>
                <li>
                  <ListItemButton
                    component={Link}
                    to="/algebra/chapter2"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 2: Graphing Linear Functions" />
                  </ListItemButton>
                </li>
                <li>
                  <ListItemButton
                    component={Link}
                    to="/algebra/chapter3"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 3: Factoring Quadratic Equations" />
                  </ListItemButton>
                </li>
                <li>
                  <ListItemButton
                    component={Link}
                    to="/algebra/chapter4"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 4: Solving Systems of Equations" />
                  </ListItemButton>
                </li>
                <li>
                  <ListItemButton
                    component={Link}
                    to="/algebra/chapter5"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 5: Simplifying Rational Expressions" />
                  </ListItemButton>
                </li>
              </ul>
            </List>
          </Collapse>
          <ListItemButton sx={{ pl: 8 }} onClick={handleClickCalculus}>
            <ListItemText secondary="Calculus" />
            {openCalculus ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openCalculus} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ul
                style={{
                  listStyleType: "none",
                  margin: 0,
                  padding: 0,
                  textAlign: "left",
                }}
              >
                <li>
                  <ListItemButton
                    component={Link}
                    to="/Calculus/chapter1"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 1: Solving Linear Equations" />
                  </ListItemButton>
                </li>
                <li>
                  <ListItemButton
                    component={Link}
                    to="/Calculus/chapter2"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 2: Graphing Linear Functions" />
                  </ListItemButton>
                </li>
                <li>
                  <ListItemButton
                    component={Link}
                    to="/Calculus/chapter3"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 3: Factoring Quadratic Equations" />
                  </ListItemButton>
                </li>
                <li>
                  <ListItemButton
                    component={Link}
                    to="/Calculus/chapter4"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 4: Solving Systems of Equations" />
                  </ListItemButton>
                </li>
                <li>
                  <ListItemButton
                    component={Link}
                    to="/Calculus/chapter5"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 5: Simplifying Rational Expressions" />
                  </ListItemButton>
                </li>
              </ul>
            </List>
          </Collapse>

          <ListItemButton sx={{ pl: 8 }} onClick={handlClickGeometry}>
            <ListItemText secondary="Geometry" />
            {openGeometry ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openGeometry} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ul
                style={{
                  listStyleType: "none",
                  margin: 0,
                  padding: 0,
                  textAlign: "left",
                }}
              >
                <li>
                  <ListItemButton
                    component={Link}
                    to="/Geometry/chapter1"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 1: Solving Linear Equations" />
                  </ListItemButton>
                </li>
                <li>
                  <ListItemButton
                    component={Link}
                    to="/Geometry/chapter2"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 2: Graphing Linear Functions" />
                  </ListItemButton>
                </li>
                <li>
                  <ListItemButton
                    component={Link}
                    to="/Geometry/chapter3"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 3: Factoring Quadratic Equations" />
                  </ListItemButton>
                </li>
                <li>
                  <ListItemButton
                    component={Link}
                    to="/Geometry/chapter4"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 4: Solving Systems of Equations" />
                  </ListItemButton>
                </li>
                <li>
                  <ListItemButton
                    component={Link}
                    to="/Geometry/chapter5"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 5: Simplifying Rational Expressions" />
                  </ListItemButton>
                </li>
              </ul>
            </List>
          </Collapse>
        </List>
      </Collapse>
{/* ///////////////////////////////////////////////////////////////////// */}
      <ListItemButton onClick={handleClickMath} sx={{ pl: 4 }}>
        <ListItemText primary="Math Lessons" />
        {openMath ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openMath} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 8 }} onClick={handleClickAlgebra}>
            <ListItemText secondary="Algebra" />
            {openAlgebra ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openAlgebra} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ul
                style={{
                  listStyleType: "none",
                  margin: 0,
                  padding: 0,
                  textAlign: "left",
                }}
              >
                <li>
                  <ListItemButton
                    component={Link}
                    to="/algebra/chapter1"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 1: Solving Linear Equations" />
                  </ListItemButton>
                </li>
                <li>
                  <ListItemButton
                    component={Link}
                    to="/algebra/chapter2"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 2: Graphing Linear Functions" />
                  </ListItemButton>
                </li>
                <li>
                  <ListItemButton
                    component={Link}
                    to="/algebra/chapter3"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 3: Factoring Quadratic Equations" />
                  </ListItemButton>
                </li>
                <li>
                  <ListItemButton
                    component={Link}
                    to="/algebra/chapter4"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 4: Solving Systems of Equations" />
                  </ListItemButton>
                </li>
                <li>
                  <ListItemButton
                    component={Link}
                    to="/algebra/chapter5"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 5: Simplifying Rational Expressions" />
                  </ListItemButton>
                </li>
              </ul>
            </List>
          </Collapse>
          <ListItemButton sx={{ pl: 8 }} onClick={handleClickCalculus}>
            <ListItemText secondary="Calculus" />
            {openCalculus ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openCalculus} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ul
                style={{
                  listStyleType: "none",
                  margin: 0,
                  padding: 0,
                  textAlign: "left",
                }}
              >
                <li>
                  <ListItemButton
                    component={Link}
                    to="/Calculus/chapter1"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 1: Solving Linear Equations" />
                  </ListItemButton>
                </li>
                <li>
                  <ListItemButton
                    component={Link}
                    to="/Calculus/chapter2"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 2: Graphing Linear Functions" />
                  </ListItemButton>
                </li>
                <li>
                  <ListItemButton
                    component={Link}
                    to="/Calculus/chapter3"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 3: Factoring Quadratic Equations" />
                  </ListItemButton>
                </li>
                <li>
                  <ListItemButton
                    component={Link}
                    to="/Calculus/chapter4"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 4: Solving Systems of Equations" />
                  </ListItemButton>
                </li>
                <li>
                  <ListItemButton
                    component={Link}
                    to="/Calculus/chapter5"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 5: Simplifying Rational Expressions" />
                  </ListItemButton>
                </li>
              </ul>
            </List>
          </Collapse>

          <ListItemButton sx={{ pl: 8 }} onClick={handlClickGeometry}>
            <ListItemText secondary="Geometry" />
            {openGeometry ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={openGeometry} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ul
                style={{
                  listStyleType: "none",
                  margin: 0,
                  padding: 0,
                  textAlign: "left",
                }}
              >
                <li>
                  <ListItemButton
                    component={Link}
                    to="/Geometry/chapter1"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 1: Solving Linear Equations" />
                  </ListItemButton>
                </li>
                <li>
                  <ListItemButton
                    component={Link}
                    to="/Geometry/chapter2"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 2: Graphing Linear Functions" />
                  </ListItemButton>
                </li>
                <li>
                  <ListItemButton
                    component={Link}
                    to="/Geometry/chapter3"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 3: Factoring Quadratic Equations" />
                  </ListItemButton>
                </li>
                <li>
                  <ListItemButton
                    component={Link}
                    to="/Geometry/chapter4"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 4: Solving Systems of Equations" />
                  </ListItemButton>
                </li>
                <li>
                  <ListItemButton
                    component={Link}
                    to="/Geometry/chapter5"
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText secondary="Chapter 5: Simplifying Rational Expressions" />
                  </ListItemButton>
                </li>
              </ul>
            </List>
          </Collapse>
        </List>
      </Collapse>
{/* ///////////////////////////////////////////////////////////////////////////////////////////// */}
<ListSubheader component="div" id="nested-list-subheader">
  Most Used Lessons
</ListSubheader>
<List sx={{ margin: 0, padding: "1rem", listStyleType: "none", textAlign: "left" ,textDecoration: "none" ,color: "#000"}} numbered>
  <ListItem sx={{ marginBottom: 2 }}>
    <Link to="/physics/chapter1" sx={{ textDecoration: "none" }}>
      <ChapterTitle component="h3" sx={{ fontSize: "1.2rem", textDecoration: "none",color: "#000" }}>
        Chapter 1: Introduction to Mechanics
      </ChapterTitle>
      <ChapterSubtitle
        primary="Learn about Newton's laws of motion, work, energy, and momentum"
        sx={{ fontSize: "0.9rem", textDecoration: "none" ,color: "#000"}}
      />
    </Link>
  </ListItem>
  <ListItem sx={{ marginBottom: 2 , color: "#000"}}>
  <Link to="/physics/chapter2" sx={{ textDecoration: "none" ,color: "#000"}}>
  <ChapterTitle component="h3" sx={{ fontSize: "1.2rem", textDecoration: "none", color: "#000" }}>
    Chapter 2: Waves and Optics
  </ChapterTitle>
  <ChapterSubtitle
    primary="Learn about the properties of waves, sound, light, and optics"
    sx={{ fontSize: "0.9rem" }}
  />
</Link>

  </ListItem>
  <ListItem sx={{ marginBottom: 2 }}>
    <Link to="/chemistry/chapter1" sx={{ textDecoration: "none" ,color: "#000"}}>
      <ChapterTitle component="h3" sx={{ fontSize: "1.2rem", textDecoration: "none",color: "#000" }}>
        Chapter 1: Atomic Structure and the Periodic Table
      </ChapterTitle>
      <ChapterSubtitle
        primary="Learn about the structure of atoms, the periodic table, and chemical bonding"
        sx={{ fontSize: "0.9rem", textDecoration: "none",color: "#000" }}
      />
    </Link>
  </ListItem>
  <ListItem sx={{ marginBottom: 2 }}>
    <Link to="/chemistry/chapter2" sx={{ textDecoration: "none" ,color: "#000"}}>
      <ChapterTitle component="h3" sx={{ fontSize: "1.2rem", textDecoration: "none" ,color: "#000"}}>
        Chapter 2: Chemical Reactions and Stoichiometry
      </ChapterTitle>
      <ChapterSubtitle
        primary="Learn about chemical reactions, stoichiometry, and reaction rates"
        sx={{ fontSize: "0.9rem", textDecoration: "none" ,color: "#000"}}
      />
    </Link>
  </ListItem>
  <ListItem sx={{ marginBottom: 2 }}>
    <Link to="/history/chapter1" sx={{ textDecoration: "none",color: "#000" }}>
      <ChapterTitle component="h3" sx={{ fontSize: "1.2rem", textDecoration: "none" ,color: "#000"}}>
        Chapter 1: Ancient Civilizations
      </ChapterTitle>
      <ChapterSubtitle
        primary="Learn about the ancient civilizations of Egypt, Mesopotamia, Greece, and Rome"
        sx={{ fontSize: "0.9rem", textDecoration: "none" ,color: "#000"}}
      />
    </Link>
  </ListItem>
  <ListItem sx={{ marginBottom: 2 }}>
    <Link to="/history/chapter2" sx={{ textDecoration: "none" ,color: "#000"}}>
      <ChapterTitle component="h3" sx={{ fontSize: "1.2rem", textDecoration:"none" ,color: "#000"}}>
Chapter 2: The Age of Exploration
</ChapterTitle>
<ChapterSubtitle
primary="Learn about the age of exploration and the impact of European colonization on the Americas and Africa"
sx={{ fontSize: "0.9rem", textDecoration: "none",color: "#000" }}
/>
</Link>
</ListItem>
</List>



    </List>
  );
}
