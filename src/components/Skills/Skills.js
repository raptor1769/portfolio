import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Skills.css";
import { Col, Container, Row } from "react-bootstrap";
import meter1 from "../../assets/img/meter1.svg";
import meter2 from "../../assets/img/meter2.svg";
import meter3 from "../../assets/img/meter3.svg";
import colorSharp from "../../assets/img/color-sharp.png";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                As a full-stack developer specialized in the MERN (MongoDB,
                Express.js, React.js, Node.js) stack, I possess a diverse range
                of skills. With expertise in both front-end and back-end
                development, I excel in crafting robust and scalable web
                applications. My proficiency includes designing responsive user
                interfaces, implementing complex functionality, optimizing
                database performance, and ensuring seamless integration between
                server and client components. With a strong problem-solving
                aptitude and a passion for delivering high-quality solutions, I
                am well-equipped to tackle the challenges of modern web
                development.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Skill 1" />
                  <h5>React JS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Skill 2" />
                  <h5>Mongo DB</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Skill 3" />
                  <h5>Express JS</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Skill 4" />
                  <h5>Node JS</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} alt="" className="background-image-left" />
    </section>
  );
};

export default Skills;
