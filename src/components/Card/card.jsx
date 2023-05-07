import React, { Component } from "react";
import "./card.css";
import img1 from "./item1.svg";
import img2 from "./item2.svg";
import { Link } from "react-router-dom";import { Box } from "@mui/material";

class Services extends Component {
  render() {
    return (
      <>
        <Box sx={{backgroundColor:"#E6F0FF", py:10}}>
          <h1
            className="card_title"
            style={{
              backgroundColor: "#E6F0FF",
              textAlign: "center",
            }}
          >
            We Provide You With
          </h1>
          <div class="productimage">
            <div class="producttext"></div>
          </div>
          <div className="service-card-container">
            <div className="service-card">
              <img src={img1} title="Teaching" alt="service" />
              <div className="service-descrip">
                <h3>Quizzes</h3>
                <p>
                  Quizzes are assessments that are designed to evaluate a
                  person's knowledge, skills, or understanding of a particular
                  subject or topic. They typically consist of a set of questions
                  that test a person's knowledge or comprehension of a specific
                  subject matter. Quizzes can be used for educational,
                  professional, or entertainment purposes and can be
                  administered in a variety of formats, such as online,
                  paper-based, or in-person.
                  <Link to="/quizzes">
                    {" "}
                    <span
                      style={{
                        color: "#FFA500",
                        float: "right",
                        justifyContent: "end",
                        padding: "30px 30px 15px",
                      }}
                    >
                      Explore more ➡
                    </span>
                  </Link>
                </p>
              </div>
            </div>
            <div className="service-card">
              <img src={img2} title="Teaching" alt="service" />
              <div className="service-descrip">
                <h3>Lessons</h3>
                <p>
                  Lessons can be delivered in a variety of formats, including
                  classroom lectures, interactive discussions, hands-on
                  activities, or online courses. A well-structured lesson
                  usually begins with an introduction that sets the stage for
                  the topic and establishes its relevance to the students. The
                  lesson then proceeds with the presentation of key ideas,
                  followed by examples, illustrations, and exercises that allow
                  students to apply what they have learned.
                  <Link to="/lessons">
                    {" "}
                    <span
                      style={{
                        color: "#FFA500",
                        float: "right",
                        justifyContent: "end",
                        padding: "30px 30px 15px",
                      }}
                    >
                      Explore more ➡
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Box>
      </>
    );
  }
}
export default Services;
