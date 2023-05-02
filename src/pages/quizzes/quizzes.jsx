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
    { expanded: false },
  ]);

  const handleExpandClick = (index) => {
    const newCards = [...cards];
    newCards[index].expanded = !newCards[index].expanded;
    setCards(newCards);
  };

  const handleAddCard = () => {
    setCards([...cards, { expanded: false }]);
  };

  React.useEffect(() => {
    axios.get("https://localhost:5000/resources/")
      .then(response => {
        console.log(response.data);
        // Do something with the data
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <NavBar />
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
          style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", marginTop: "2rem" }}
        >
          {cards.map((card, index) => (
            <Card sx={{ maxWidth: 345, margin: "1rem" }} key={index}>
              <CardMedia
                component="img"
                height="194"
                src="https://i.ytimg.com/vi/ezpcyQQ5zAU/maxresdefault.jpg"
                alt="Débutant"
              />
              <CardActions disableSpacing>
                <Typography>
                  le gens fille
                </Typography>

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
                  <Typography variant="body2" color="text.secondary">
                    <strong>Name:</strong>
Débutant
                    <br />
                    <strong>Subject:</strong> Mathematics
                    <br />
                    <strong>Grade:</strong> 9th
                  </Typography>
                </CardContent>
             

              </Collapse>
            </Card>
          ))}
        </div>
      </div>
      <IconButton aria-label="add card" onClick={handleAddCard}>
        <AddIcon />
      </IconButton>
    </>
  );
}
