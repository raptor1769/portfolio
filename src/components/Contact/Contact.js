import { useState } from "react";
import "./Contact.css";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../../assets/img/contact-img.svg";
// import axios from "axios";

const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  // const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  // console.log(status);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    // let response = await axios.post(
    //   `${process.env.REACT_APP_BACKEND}/contact`,
    //   JSON.stringify(formDetails),
    //   {
    //     headers: {
    //       "Content-Type": "Application/json;charset=utf-8",
    //     },
    //   }
    // );
    setButtonText("Send");

    // console.log(response);
    // setFormDetails(formInitialDetails);
    // if (response.status === 200) {
    //   setStatus({ success: true, message: "Message sent successfully" });
    // } else {
    //   setStatus({
    //     success: false,
    //     message: "Something went wrong, please try again later",
    //   });
    // }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="contact us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                    required
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                    required
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                    required
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone No."
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                    required
                  />
                </Col>
                <Col style={{ padding: "4px" }}>
                  <textarea
                    row="6"
                    style={{ resize: "none" }}
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                    required
                  />
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
              </Row>
              {/* {status.message && ( */}
              {/* <Col>
                <p className={status.success ? "success" : "danger"}>
                  {status.message}
                </p>
              </Col> */}
              {/* )} */}
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
