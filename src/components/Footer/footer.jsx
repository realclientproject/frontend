import React from "react";
import stylefooter from "./footer.css";
import logo from "./logo.svg";

import Avatar from "@mui/material/Avatar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col" id="company">
            <Avatar
              sx={{
                height: "auto",
                width: "auto",
                p: 0,
                paddingBottom: "25px",
              }}
              alt="Remy Sharp"
              src={logo}
            />
            <p className="col_name">SupportTeacher.com</p>
            <div className="social">
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
            <p className="col_copyright">
              Copyright &copy;Support Teacher | Powered By CodiTech Team 1 |
              2023
            </p>
            <p className="col_res">All right reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
