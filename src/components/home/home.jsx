import HomeCourses from "../courses/homeCourses"
import Doante from "./donate";
import BackendCall from "../institute/BackendCall";
import "./home.css";
import Teachers from "../teachers/teachers";


function Home() {
  return (
    <>
      <BackendCall />

      <section className="home" id="home">
        <div className="content">
          <h1>
            The institute of <br></br>muarif-e-quran and ahel-e-bait a.S
          </h1>
          <a href="/lectures">
            <button className="btn">Learn More</button>
          </a>
        </div>
      </section>

      <section className="about" id="about">
        <h1 className="heading">
          <span>The Institute of Quran and Ahlul-Bayt</span>
        </h1>
        <div className="row">
          <div className="content">
            <h3>about us</h3>
            <p>
              this is a Quranic and religious institution which has been
              carrying out Quranic, religious and cultural activities for the
              past {new Date().getFullYear() - 2010} years. The Institute of
              Quran Education and Ahl al-Bayt (A.S.) stands by the side of you
              parents for the education of children and young generation. This
              institution through its experienced, expert and competent teachers
              has the ability to train your children according to the right
              religious standards and make them a good citizen, a pious and
              responsible person and a true awaited Imam of the time.
            </p>
            <a href="/about">
              <button className="btn">learn more</button>
            </a>
          </div>
        </div>
      </section>
      <HomeCourses />
      <Teachers />
      <Doante />
    </>
  );
}

export default Home;
