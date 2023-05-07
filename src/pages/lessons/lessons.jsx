import * as React from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import NestedList from "../../components/lessons/NestedList";

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

const CardContainer = styled("div")({
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  margin: "2rem",
  maxWidth: "70%", 
  overflow: "hidden",
  padding: "0.5rem",
  position: "relative",
  transition: "transform 0.2s",
  "&:hover": {
    transform: "scale(1.02)",
  },
});

const CardImage = styled("img")({
  height: "200px",
  objectFit: "cover",
  width: "100%",
});

const CardTitle = styled("h2")({
  fontSize: "1.5rem",
  fontWeight: "bold",
  margin: "1rem 0 0.5rem",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

const CardDescription = styled("p")({
  color: "#777",
  fontSize: "1rem",
  margin: "0.5rem 0",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

const CardFooter = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

export default function RecipeReviewCard() {
  const [data, setData] = React.useState([]);
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

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", marginTop: "1rem" }}>
        <NestedList />
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {data.map((data2, index) => (
            <CardContainer key={index}>
              <CardImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf1W8A9Tu441wNHIA1DBXFo7FHJ4UubahKQbyq7N1FuU5Dv84KbjucMfks1CfmLjQGLoE&usqp=CAU" alt="Media" />
              <CardTitle>{data2.name}</CardTitle>
              <CardDescription>{data2.description}</CardDescription>
              <CardFooter>
                <div>{data2.type}</div>
                <div>{data2.price}</div>
              </CardFooter>
            </CardContainer>
          ))}
        </div>
      </div>
    </>
  );
}
