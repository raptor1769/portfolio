import { Col, Container, Row } from "react-bootstrap";
// import logo from "../../assets/img/logo.svg";
import navIcon1 from "../../assets/img/nav-icon1.svg";
// import navIcon2 from "../../assets/img/nav-icon2.svg";
// import navIcon3 from "../../assets/img/nav-icon3.svg";
import navIcon4 from "../../assets/img/github.svg";
import "./Footer.css";
// import MailchimpForm from "../MailchimpForm";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center justify-content-center footer-flex">
          {/* <MailchimpForm /> */}
          {/* <Col size={12} sm={6}>
            <img src={logo} alt="logo" />
            <h1 style={{color: "white", fontFamily: "monospace"}}>Jk</h1>
          </Col> */}
          <Col size={12} sm={6} className="text-center">
            <div className="social-icon">
              <a
                rel="noreferrer"
                href="https://www.linkedin.com/in/jainam-kotadia-964679179/"
                target="_blank"
              >
                {" "}
                <img src={navIcon1} alt="fb" />{" "}
              </a>
              {/* <a href="/">
                {" "}
                <img src={navIcon2} alt="git" />{" "}
              </a> */}
              <a
                rel="noreferrer"
                href="https://github.com/raptor1769"
                target="_blank"
              >
                {" "}
                <img src={navIcon4} alt="github" />{" "}
              </a>
            </div>
            <p>Copyright 2022. All rights reserved by Jainam</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
