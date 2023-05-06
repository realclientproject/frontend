import * as React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function NestedList() {
  const [subject, setSubject] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:8000/subject", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((response) => {
        setSubject(response.data.response);
        console.log(response.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [isOpen, setIsOpen] = React.useState([]);

  const handleToggle = (index) => {
    setIsOpen((prevIsOpen) => {
      const newIsOpen = [...prevIsOpen];
      newIsOpen[index] = !newIsOpen[index];
      return newIsOpen;
    });
  };

  return (
    <div>
      <ul style={{ listStyleType: "none", padding: "20px", backgroundColor: "#f9f9f9" }}>
        {subject.map((data1, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <div
              style={{
                padding: "10px",
                fontSize: "12px",
              }}
            >
              <h4
                onClick={() => handleToggle(index)}
                style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
              >
                {data1.description}
                {isOpen[index] ? <FaAngleUp style={{ marginLeft: "5px" }} /> : <FaAngleDown style={{ marginLeft: "5px" }} />}
              </h4>
              {isOpen[index] && (
                <ul style={{ listStyleType: "none", padding: 0 }}>
                  <li>
                    Language:{" "}
                    <Link
                      to={data1.lang_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      {data1.lang}
                    </Link>
                  </li>
                  <li>
                    Grade:{" "}
                    <Link
                      href={data1.grade_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      {data1.grade}
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
