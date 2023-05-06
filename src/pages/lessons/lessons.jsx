import * as React from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import NavBar from "../../components/navbar/navbar";
import DownloadIcon from "@mui/icons-material/Download";
import NestedList from "../../components/lessons/NestedList";
import RenderGroup from "../../components/lessons/searchbar";

////////card style + animation ////
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [cards, setCards] = React.useState([
    { expanded: false },
    
  ]);

  const handleExpandClick = (index) => {
    const newCards = [...cards];
    newCards[index].expanded = !newCards[index].expanded;
    setCards(newCards);
  };

  /////////////////////////////////
  const [data, setData] = React.useState([
    
  ]);
  React.useEffect(() => {
    axios
      .get("http://localhost:8000/resource", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((response) => {
        setData(response.data.response);
        console.log(response.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
//////////////////////////////////////////////////////////
// const [data1, setData1] = React.useState([
//   []
// ]);
// React.useEffect(() => {
//   axios
//     .get("http://localhost:8000/subject", {
//       headers: {
//         Authorization: "Bearer " + localStorage.getItem("access_token"),
//       },
//     })
//     .then((response) => {
//       setData1(response.data1.response);
//       console.log(response.data1.response);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }, []);

  return (
    <>
      <NavBar />

      <div style={{ display: "flex", flexDirection: "row", marginTop: "1rem" }}>
          {" "}
          <NestedList />
        <div
          style={{ display: "flex", flexDirection: "column", marginTop: "1rem" }}
        >

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              margin: "3rem",
            }}
          >
            <Typography variant="h3" align="center" fontWeight="bold">
              Lessons
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                marginTop: "2rem",
              }}
            >
              {cards.map((card, index) => (
                <Card sx={{ maxWidth: 345, margin: "1rem" }} key={index}>
                 
                  <CardMedia
                    component="img"
                    height="194"
                    src="https://i.ytimg.com/vi/ioYxmPf9zmQ/maxresdefault.jpg"
                    alt="Débutant"
                  />
                  <CardActions disableSpacing>
                    <Typography>le gens fille</Typography>

                    <ExpandMore
                      expand={card.expanded}
                      onClick={() => handleExpandClick(index)}
                      aria-expanded={card.expanded}
                      aria-label="show more"
                    >
                      <AddIcon />
                    </ExpandMore>
                    <IconButton aria-label="download">
                      <DownloadIcon />
                    </IconButton>
                  </CardActions>
                  <Collapse in={card.expanded} timeout="auto" unmountOnExit>
                  <CardContent>
        <Typography paragraph>Method:</Typography>
        {data.map((row, index) => (
          <Typography key={index} variant="body2" color="text.secondary">
            <strong>Name:</strong>{row.name}
            <br />
            <strong>Subject:</strong> {row.type}
            <br />
            <strong>Grade:</strong> 9th
          </Typography>
        ))}
      </CardContent>
    </Collapse>
  </Card>
              ))}
            </div>
          </div>
         
        </div>

      </div>
      <RenderGroup/>

    </>
  );
}
