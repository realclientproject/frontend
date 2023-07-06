import React, { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import NestedList from "../../components/lessons/NestedList";
import ComboBox from "../../components/lessons/searchbar";
import GetAppIcon from "@mui/icons-material/GetApp";
import DownloadIcon from "@mui/icons-material/Download";
import { Document, Page, pdfjs } from "react-pdf";
import PdfIcon from "../../images/logoo.png";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
  fontSize: "1rem",
  fontWeight: "bold",
  margin: "0.5rem 0",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

const CardDescription = styled("p")({
  color: "#777",
  fontSize: "0.8rem",
  margin: "0.5rem 0",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

const CardFooter = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

const DownloadButton = styled(GetAppIcon)({
  fontSize: "2rem",
});

const handleDownload = (fileUrl) => {
  axios
    .get(`/public${fileUrl}`, {
      responseType: "blob",
    })
    .then((response) => {
      const blob = new Blob([response.data], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "document.pdf";
      link.click();
    })
    .catch((error) => {
      console.log(error);
    });
};

export default function RecipeReviewCard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://supportteachers-mern-api.onrender.com/resource", {
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
    <div style={{ width: "100%" }}>
      <div style={{ textAlign: "center", margin: "1rem 0" }}>
        <p
          style={{
            fontFamily: "Arial",
            fontWeight: "bold",
            fontSize: "50px",
            marginTop: "3rem",
          }}
        >
          Quizzes
        </p>
      </div>
      <div style={{ display: "flex", flexDirection: "row", marginTop: "1rem" }}>
        <div style={{ width: "20%" }}>
          <NestedList class />
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            width: "80%",
          }}
        >
          {data.map((data2, index) => (
            <CardContainer key={index}>
              {data2.type === "pdf" || data2.type === "doc" ? (
                <>
                  <PdfIcon />
                  <CardTitle>{data2.name}</CardTitle>
                  <CardDescription>{data2.description}</CardDescription>
                </>
              ) : (
                <Document
                  file={`https://supportteachers-mern-api.onrender.com/resource/${data2.media}`}
                  onLoadSuccess={() =>
                    console.log("Document loaded successfully")
                  }
                >
                  <Page pageNumber={1} width={200} />
                </Document>
              )}
              <CardFooter>
                <div>{data2.type}</div>
                <div>{data2.price}</div>
                <div>
                <IconButton
  aria-label="download"
  component="span"
  style={{ color: "#444" }}
  onClick={() =>
    handleDownload(
      `https://supportteachers-mern-api.onrender.com/resource/${data2.media}`
    )
  }
>
                    <DownloadIcon />
                  </IconButton>
                </div>
              </CardFooter>
            </CardContainer>
          ))}
        </div>
      </div>
      <div style={{ marginBottom: "3rem" }}>
        <ComboBox />
      </div>
    </div>
  );
}
