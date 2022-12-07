import React from "react";

import "../styles/Contact.css";
// import { useRef } from "react";
// import emailjs from "@emailjs/browser";

function Contact() {
  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm("gmail", "template_YeJhZkgb", form.current, "your-token")
  //     .then(
  //       () => {
  //         alert("Message successfully sent!");
  //         window.location.reload(false);
  //       },
  //       () => {
  //         alert("Failed to send the message, please try again");
  //       }
  //     );
  // };

  return (
    <div className="contact">
      <div className="head">
        CONTACT ME
        <p>
          HI, I am Akash Chanara, If you have any other question you can fill
          this form and contact me !!!
        </p>
      </div>
      <div className="form">
        <form>
          <div className="form-input">
            <input placeholder="Name" type="text" name="name" required />
          </div>
          <div className="form-input">
            <input placeholder="Email" type="email" name="email" required />
          </div>
          <div className="form-input">
            <input placeholder="Subject" type="text" name="subject" required />
          </div>
          <div className="form-input">
            <textarea placeholder="Message" name="message" required></textarea>
          </div>
          <div>
            <input type="submit" className="button" value="SEND" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
