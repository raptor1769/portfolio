import { Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../../assets/img/header-img.svg";
import { useCallback, useEffect, useState } from "react";
import "animate.css";
// import TrackVisibility from "react-on-screen";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  // const [index, setIndex] = useState(1);

  const period = 2000;

  const handleScroll = () => {
    const contactSection = document.getElementById("connect");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const tick = useCallback(() => {
    const toRotate = ["Web Developer"];
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = deleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (deleting) setDelta((prev) => prev / 2);

    if (!deleting && updatedText === fullText) {
      setDeleting(true);
      // setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (deleting && updatedText === "") {
      setDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
      // setIndex(1);
    } else {
      // setIndex((prevIndex) => prevIndex + 1);
    }
  }, [deleting, loopNum, text.length]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta, tick]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <div>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                {"Hi I'm Jainam "}
                <br />
                <span
                  className="txt-rotate"
                  // dataPeriod="1000"
                  data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                >
                  <span className="wrap">{text}</span>
                </span>
              </h1>
              <p>
                A passionate MERN stack developer with a strong focus on
                building robust and scalable web applications. With several
                years of experience in full-stack development, I'm well-versed
                in all aspects of the MERN stack, from designing and
                implementing databases to creating interactive user interfaces.
              </p>
              <button onClick={handleScroll}>
                Let's connect <ArrowRightCircle size={25} />{" "}
              </button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header-Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
