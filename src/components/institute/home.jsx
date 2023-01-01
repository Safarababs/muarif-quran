import HomeCourses from "../institute/homeCourses";
import Cultural from "../institute/cultural";
import Doante from "../institute/donate";

function Home() {
  return (
    <>
      <section className="landing" id="home">
        <h1>
          The institute of <br></br>muarif-e-quran and ahel-e-bait a.S
        </h1>
        <a href="/lectures">
          <button className="button">get started</button>
        </a>
      </section>

      <div className="home" id="home">
        <section className="about">
          <div className="content">
            <p>
              The Institute of Quran and Ahl al-Bayt is a Quranic and religious
              institution which has been carrying out Quranic, religious and
              cultural activities for the past {new Date().getFullYear() - 2010}{" "}
              years. The Institute of Quran Education and Ahl al-Bayt (A.S.)
              stands by the side of you parents for the education of children
              and young generation. This institution through its experienced,
              expert and competent teachers has the ability to train your
              children according to the right religious standards and make them
              a good citizen, a pious and responsible person and a true awaited
              Imam of the time.<br></br>
              <a href="/about" style={{ textDecoration: "underline" }}>
                read more
              </a>
            </p>
          </div>
        </section>
        <HomeCourses />
        <Cultural />

        <Doante />
      </div>
    </>
  );
}

export default Home;
