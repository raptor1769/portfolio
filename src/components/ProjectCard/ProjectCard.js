import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a rel="noreferrer" href={link} target="_blank">
        <div className="proj-imgbx" style={{height: "100%"}}>
          <img src={imgUrl} alt={title} style={{height: "100%"}} />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};

export default ProjectCard;
