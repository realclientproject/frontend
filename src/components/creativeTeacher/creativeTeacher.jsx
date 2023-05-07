import { Box, Typography } from "@mui/material";
import React from "react";
import TeacherCard from "../teacherCard/teacherCard.jsx";
import TeachersBackground from "../../images/teachersBackground.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./slider.css"
export default function CreativeTeacher() {
  const settings = {
    centerMode: false,
    speed: 3000,
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed:5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        paddingInline: "10%",
        backgroundImage: `url(${TeachersBackground})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        justifyContent: "center",
        alignContent: "center",
        py:10
      }}
    >
      <Typography variant="h2" fontWeight="700" mb={4}>
        Our Creative Teachers
      </Typography>
      <Typography maxWidth={["100%", "70%"]} marginX="auto" mb={12}>
        "Our creative teachers are innovative and dedicated educators who use
        their passion and imagination to inspire and engage their students in
        meaningful learning experiences."
      </Typography>
      <Slider {...settings} >
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
      </Slider>
    </Box>
  );
}

TeacherCard.defaultProps = {
  teacher: {
    Name: "Jeffry Brown",
    Subject: "English",
    Experience: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore",
  },
};
