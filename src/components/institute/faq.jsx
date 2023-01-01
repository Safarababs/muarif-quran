function Faq() {
  return (
    <section className="faq">
      <h1 className="heading">frequently asked questions</h1>

      <div className="accordion-container">
        <div className="accordion active">
          <div className="accordion-heading">
            <h3>what is the online class time?</h3>
            <i className="fas fa-angle-down"></i>
          </div>
          <p className="accordion-content">
            classes are held on 9 pM pakistan time on google meet{" "}
            <a href="/courses" style={{ color: "blue" }}>
              click here
            </a>
          </p>
        </div>

        <div className="accordion">
          <div className="accordion-heading">
            <h3>is there any requirement to get addmission</h3>
            <i className="fas fa-angle-down"></i>
          </div>
          <p className="accordion-content">
            No. you are free bird. we are provideing our services year's ago and
            we didn't cast any one
          </p>
        </div>

        <div className="accordion">
          <div className="accordion-heading">
            <h3>how can we get books</h3>
            <i className="fas fa-angle-down"></i>
          </div>
          <p className="accordion-content">
            you can download it on our website in courses section
          </p>
        </div>

        <div className="accordion">
          <div className="accordion-heading">
            <h3>how to contact for help?</h3>
            <i className="fas fa-angle-down"></i>
          </div>
          <p className="accordion-content">
            all the contacts details are availabe in contact section
          </p>
        </div>

        <div className="accordion">
          <div className="accordion-heading">
            <h3>how to get previous lectures?</h3>
            <i className="fas fa-angle-down"></i>
          </div>
          <p className="accordion-content">
            all lectures are availabe on our official website in lectures
            section
          </p>
        </div>

        <div className="accordion">
          <div className="accordion-heading">
            <h3>do you take the exam</h3>
            <i className="fas fa-angle-down"></i>
          </div>
          <p className="accordion-content">yes we do</p>
        </div>
      </div>
    </section>
  );
}

export default Faq;
