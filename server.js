const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/", router);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port: ${process.env.PORT || 5000}`);
});

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.WORD,
  },
});

contactEmail.verify((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Ready to send");
  }
});

router.post("/contact", (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body;
  const mail = {
    from: firstName + " " + lastName,
    to: process.env.EMAIL,
    subject: "Contact form - Portfolio",
    html: `<p>Name: ${
      firstName + " " + lastName
    }</p><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (err) => {
    if (err) {
      res.json(err);
    } else {
      res.json({ code: 200, status: "Message" });
    }
  });
});
