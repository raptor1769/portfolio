import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
// import logo from "../../assets/img/logo.svg";
import navIcon1 from "../../assets/img/nav-icon1.svg";
// import navIcon2 from "../../assets/img/nav-icon2.svg";
// import navIcon3 from "../../assets/img/nav-icon3.svg";
import navIcon4 from "../../assets/img/github.svg";
import "./NavBar.css";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // const handleScroll = () => {
  //   const contactSection = document.getElementById("connect");
  //   if (contactSection) {
  //     contactSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          {/* <img src={logo} alt="Logo" /> */}
          <h1 style={{color: "white", fontFamily: "monospace"}}>Jk</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => setActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => setActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => setActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                rel="noreferrer"
                href="https://www.linkedin.com/in/jainam-kotadia-964679179/"
                target="_blank"
              >
                {" "}
                <img src={navIcon1} alt="fb" />{" "}
              </a>
              {/* <a href="#">
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
            {/* <button className="vvd" onClick={handleScroll}>
              Let's connect
            </button> */}
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
