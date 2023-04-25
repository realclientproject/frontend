import { Box, Typography } from "@mui/material";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../creativeTeacher/slider.css";
import TestimonailCard from "../testimonailCard/testimonailCard.jsx";
export default function TestimonailSlider() {
  const settings = {
    centerMode: false,
    speed: 3000,
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
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
        height: "100vh",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Typography variant="h2" fontWeight="700" mb={4}>
        Check our happy clients
      </Typography>
      <Typography maxWidth={["100%", "70%"]} marginX="auto" mb={12}>
        "Our happy clients are satisfied and loyal customers who have received
        exceptional service and value from our company."
      </Typography>
      <Slider {...settings}>
        <TestimonailCard />
        <TestimonailCard />
        <TestimonailCard />
        <TestimonailCard />
        <TestimonailCard />
        <TestimonailCard />
        <TestimonailCard />
      </Slider>
    </Box>
  );
}

TestimonailCard.defaultProps = {
  testimony: {
    name: "Jeffry Brown",
    comment:
      "activities, or online courses. A well-structured lesson usually begins with an introduction that sets the stage for the topic and establishes its relevance to the students. The lesson then",
  },
};
