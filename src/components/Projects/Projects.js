import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
// import projImg1 from "../../assets/img/project-img1.png";
// import projImg2 from "../../assets/img/project-img2.png";
// import projImg3 from "../../assets/img/project-img3.png";
import projImg4 from "../../assets/img/LMS.jpg";
import projImg5 from "../../assets/img/PAP.jpg";
import projImg6 from "../../assets/img/FRA.jpg";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.css";
import TrackVisibility from "react-on-screen";

const Projects = () => {
  const project = [
    {
      title: "Hola Food",
      description: "Food Order App",
      link: "https://fancy-gumption-3e12d3.netlify.app/",
      imgUrl: projImg6,
    },
    {
      title: "LMS",
      description: "Learning Management System",
      link: "https://transcendent-bunny-7d061e.netlify.app/",
      imgUrl: projImg4,
    },
    {
      title: "Pin-A-Peer",
      description: "MERN Chat App",
      link: "https://comfy-pony-af48c2.netlify.app/",
      imgUrl: projImg5,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I have successfully developed and delivered a variety of web
                    applications, showcasing my versatility and proficiency in
                    MERN stack development. Below are few of them.
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Third</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {project.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque quam, quod neque provident velit, rem explicabo
                    excepturi id illo molestiae blanditiis, eligendi dicta
                    officiis asperiores delectus quasi inventore debitis quo.
                  </p>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque quam, quod neque provident velit, rem explicabo
                    excepturi id illo molestiae blanditiis, eligendi dicta
                    officiis asperiores delectus quasi inventore debitis quo.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        alt="colorSharp"
        src={colorSharp2}
      ></img>
    </section>
  );
};

export default Projects;
