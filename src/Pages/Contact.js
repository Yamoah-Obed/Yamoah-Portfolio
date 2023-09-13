import React from "react";
import "../AllCss/Contact.css";

const Contact = () => {
  return (
    <section className="Contact">
      <div className="ContactContainer">
        <div className="ContactTitle">
          <h2>CONTACT ME</h2>
        </div>
        <div className="ContactLineContainer">
          <div className="ContactLine"></div>
        </div>
      </div>
      <div>
        <form id="contact-form">
          <input
            placeholder="Name"
            type="text"
            id="name"
            name="name"
            required
          />

          <input
            placeholder="E-mail"
            type="email"
            id="email"
            name="email"
            required
          />

          <textarea
            placeholder="Text......"
            id="message"
            name="message"
            rows="9"
            required
          ></textarea>

          <button className="submit" type="submit">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
