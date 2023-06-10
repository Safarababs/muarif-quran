import React from "react";
import ContactForm from "./contactForm";
import Faq from "../institute/faq";
import img from "../images/logo.jpg";
import Donate from "../home/donate";
import MaleLinks from "../student/maleLinks";
import BackendCall from "../institute/BackendCall";
import "./contact.css";

function Contact() {
  return (
    <>
      

      <section className="contact">
      <h1 className="heading"><span>get in touch</span></h1>
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
