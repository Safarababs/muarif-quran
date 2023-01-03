import React from "react";
import ContactForm from "./contactForm";
import Faq from "../institute/faq";
import img from "../images/logo.jpg";
import Donate from "../institute/donate";
import MaleLinks from "../student/maleLinks";
import BackendCall from "../institute/BackendCall";

function Contact() {
  return (
    <>
      <h1
        className="heading"
        style={{ marginTop: "7rem", background: "#89cff0" }}
      >
        get in touch
      </h1>

      <section className="contact">
        <div className="row">
          <div className="image">
            <img src={img} alt="not supported for your browser" />
          </div>

          <ContactForm />
        </div>
        <MaleLinks />
      </section>
      <Donate />
      <Faq />
      <BackendCall />
    </>
  );
}

export default Contact;
