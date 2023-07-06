import * as React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from "react";

export default function NestedList() {
  const [selectedGrade, setSelectedGrade] = useState("");
  const [selectedType, setSelectedType] = useState("");


  return (
    <div style={{ width: "100%" }}>
      <ul
        style={{
          listStyleType: "none",
          padding: "20px",
          backgroundColor: "#e6f0ff66",
        }}
      >
              <h1>Content</h1>

        <li style={{ marginBottom: "10px" }}>
          <div
            style={{
              padding: "10px",
              fontSize: "18px",
            }}
          >
          
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li style={{ listStyleType: "none", padding: "10px" }}>
                <h4 style={{ marginBottom: "10px" }}>Language</h4>
                <ul
                  style={{
                    textDecoration: "none",
                    listStyleType: "none",
                    lineHeight: "2rem",
                    color: "#242526",
                    fontFamily: "monospace",
                  }}
                >
                  <Link onClick={() => setSelectedType("Arabic")}>Arabic</Link>
                  <li><a href ="" onClick={() => setSelectedType("English")}>English</a></li>
                  <li><a href="" onClick={() => setSelectedType("French")}>French</a></li>
                </ul>
                <hr/>
                <ul>
                  <li style={{ listStyleType: "none", padding: "10px" }}>
                    <h4 style={{ marginBottom: "10px" }}> Grades</h4>

                    <ul
                      style={{
                        textDecoration: "none",
                        listStyleType: "none",
                        lineHeight: "2rem",
                        color: "#242526",
                        fontFamily: "monospace",
                      }}
                    >
                      <li >kg1</li>
                      <li>kg2</li>
                      <li>kg3</li>
                      <li>grade1</li>
                      <li>grade2</li>
                      <li>grade3</li>
                      <li>grade4</li>
                      <li>grade5</li>
                      <li>grade6</li>
                      <li>grade7</li>
                      <li>grade8</li>
                      <li>grade9</li>
                      <li>grade10</li>
                      <li>grade11</li>
                      <li>grade12</li>
                    </ul>
                  </li>
                  <hr/>
                  <li style={{ listStyleType: "none", padding: "10px" }}>
                    <h4 style={{ marginBottom: "10px" }}> Language Package</h4>

                    <ul
                      style={{
                        textDecoration: "none",
                        listStyleType: "none",
                        lineHeight: "2rem",
                        color: "#242526",
                        fontFamily: "monospace",
                      }}
                    >
                      <li>Compréhension</li>
                      <li>Littérature</li>
                      <li>Écriture</li>
                      <li>Vocabulaire</li>
                      <li>Lecture</li>
                      <li>Orthographe</li>
                      <li>Phonétique</li>
                      <li>Écriture créative</li>
                      <li>Poésie</li>
                      <li>Rédaction d'essais</li>
                      <li>Prise de parole en public</li>
                      <li>Débat</li>
                      <li>Pensée critique</li>
                      <li>Compétences en recherche</li>
                      <li>Arts du langage</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <style jsx>{`
        /* Responsive styles */
        @media screen and (max-width: 767px) {
          div {
            width: 100%;
          }

          h4 {
            font-size: 10px;
          }
        }
      `}</style>
    </div>
  );
}
