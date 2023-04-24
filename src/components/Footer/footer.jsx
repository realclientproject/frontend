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
import {
  faLocation,
  faPhone,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col" id="languages">
            <h3>Languages</h3>
            <div className="links">
              <a href="#">Arabic</a>
              <a href="#">French</a>
              <a href="#">English</a>
            </div>
          </div>

          <div className="col" id="Elements">
            <h3>Elements</h3>
            <div className="links">
              <a href="#">Arabic</a>
              <a href="#">French</a>
              <a href="#">English</a>
              <a href="#">History</a>
              <a href="#">Chemistry</a>
              <a href="#">Physics</a>
            </div>
          </div>

          <div className="col" id="company">
            <Avatar
              sx={{ height: "auto", width: "auto", p: 0, paddingBottom: "25px" }}
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

          <div className="col" id="Training">
            <h3>Training</h3>
            <div className="links">
              <a href="#">Arabic level 1</a>
              <a href="#">French level 2</a>
              <a href="#">English level 3</a>
              <a href="#">History level 4</a>
              <a href="#">Chemistry level 5</a>
              <a href="#">Physics level 6</a>
            </div>
          </div>

          <div className="col" id="Teachers">
            <h3>Teachers</h3>
            <div className="links">
              <a href="#">Malek</a>
              <a href="#">Ibrahim</a>
              <a href="#">Fatima</a>
              <a href="#">Fatina</a>
              <a href="#">Fadi</a>
              <a href="#">Ahmad</a>
            </div>
          </div>

          {/* <div className="col" id="contact">
            <h3>Contact</h3>
            <div className="contact-details">
              <FontAwesomeIcon icon={faLocation} />
              <p>
                FF-42, Procube Avenue, <br /> NY, USA
              </p>
            </div>
            <div className="contact-details">
              <FontAwesomeIcon icon={faPhone} />
              <p>+1-8755856858</p>
            </div>
          </div> */}
        </div>

        {/* <div className="row">
          <div className="form">
            <form action="">
              <input type="text" placeholder="Email here..." />
              <button>
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </form>
          </div>
        </div> */}
      </div>
    </footer>
  );
}
