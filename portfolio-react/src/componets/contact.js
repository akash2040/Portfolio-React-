import React from "react";
import "../styles/Contact.css";

function Contact() {
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
          <ul>
            <li className="form-input">
              <input placeholder="Name" type="text" name="name" required />
            </li>
            <li className="form-input">
              <input placeholder="Email" type="email" name="email" required />
            </li>
            <li className="form-input">
              <input
                placeholder="Subject"
                type="text"
                name="subject"
                required
              />
            </li>
            <div className="form-input">
              <textarea
                placeholder="Message"
                name="message"
                required
              ></textarea>
            </div>
            <div>
              <input type="submit" className="flat-button" value="SEND" />
            </div>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default Contact;
