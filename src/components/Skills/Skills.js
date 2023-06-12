import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Skills.css";
import { Col, Container, Row } from "react-bootstrap";
import htmlPic from "../../assets/img/html.png";
import chakraPic from "../../assets/img/chakra.png";
import cssPic from "../../assets/img/CSS.png";
import bootstrapPic from "../../assets/img/bootstrap.png";
import expressPic from "../../assets/img/express.png";
import jsPic from "../../assets/img/javascript.jpg";
import materialPic from "../../assets/img/material.png";
import mongoPic from "../../assets/img/mongo.png";
import nodePic from "../../assets/img/node.png";
import reactPic from "../../assets/img/react.png";
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
        <div className="skill-bx grid-container">
          <div className="grid-item item-1">
            <img src={htmlPic} alt="html-logo" />
          </div>
          <div className="grid-item item-2">
            <img src={cssPic} alt="css-logo" />
          </div>
          <div className="grid-item item-3">
            <img src={jsPic} alt="js-logo" />
          </div>
          <div className="grid-item item-4">
            <img src={bootstrapPic} alt="bootstrap-logo" />
          </div>
          <div className="grid-item item-5">
            <img src={nodePic} alt="node-logo" />
          </div>
          <div className="grid-item item-6">
            <img src={reactPic} alt="react-logo" />
          </div>
          <div className="grid-item item-7">
            <img src={chakraPic} alt="chakra-logo" />
          </div>
          <div className="grid-item item-8">
            <img src={mongoPic} alt="mongo-logo" />
          </div>
          <div className="grid-item item-9">
            <img src={expressPic} alt="express-logo" />
          </div>
          <div className="grid-item item-10">
            <img src={materialPic} alt="material-ui-logo" />
          </div>
        </div>
      </Container>
      <img src={colorSharp} alt="" className="background-image-left" />
    </section>
  );
};

export default Skills;
