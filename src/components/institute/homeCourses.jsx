import React from "react";

// images
import img1 from "../images/back.jpg";
import img2 from "../images/homecourses images/Muslim-girl-Quran.webp";
import img3 from "../images/homecourses images/doubts.jpg";
import img4 from "../images/homecourses images/history.jpg";
import img5 from "../images/homecourses images/ethics.webp";
import img6 from "../images/homecourses images/practical.jpg";
import img7 from "../images/homecourses images/adovacacy.jpg";
import img8 from "../images/homecourses images/success.jpg";
import img9 from "../images/homecourses images/media.png";
import img10 from "../images/homecourses images/language.jpg";
import img11 from "../images/homecourses images/prudance.jpg";

function HomeCourses() {
  return (
    <section className="home-courses">
      <h1 className="heading"> our major courses </h1>

      <div className="box-container">
        <div className="box" data-aos="fade-up">
          <div className="image">
            <img src={img1} alt="" />
          </div>
          <div className="content">
            <h3>
              quran classess <span> قرآن کلاسز</span>
            </h3>
            <a href="/courses" className="btn">
              read more
            </a>
          </div>
        </div>

        <div className="box" data-aos="fade-down">
          <div className="image">
            <img src={img2} alt="" />
          </div>
          <div className="content">
            <h3>
              islamic beliefs <span> عقاید اسلامی</span>
            </h3>
            <a href="/courses" className="btn">
              read more
            </a>
          </div>
        </div>

        <div className="box" data-aos="fade-right">
          <div className="image">
            <img src={img3} alt="" />
          </div>
          <div className="content">
            <h3>
              Answers to Doubts <span> شبہات کے جواب</span>
            </h3>
            <a href="/courses" className="btn">
              read more
            </a>
          </div>
        </div>

        <div className="box" data-aos="fade-left">
          <div className="image">
            <img src={img4} alt="" />
          </div>
          <div className="content">
            <h3>
              History and Biography of the masoomeen a.S{" "}
              <span> تاریخ و سیرت معصومین</span>
            </h3>
            <p>زندگانی چہاردہ معصومین اور سوانح حیات</p>
            <a href="/courses" className="btn">
              read more
            </a>
          </div>
        </div>

        <div className="box" data-aos="fade-down">
          <div className="image">
            <img src={img5} alt="" />
          </div>
          <div className="content">
            <h3>
              Ethics (choice of friends, respect for parents, patience,
              self-control) <span> اخلاق</span>
            </h3>
            <p>دوست کا انتخاب، والدین کا احترام،صبر و تحمل، نفس پر کنٹرول</p>
            <a href="/courses" className="btn">
              read more
            </a>
          </div>
        </div>

        <div className="box" data-aos="fade-right">
          <div className="image">
            <img src={img6} alt="" />
          </div>
          <div className="content">
            <h3>
              Practical rules (Ijtihad and Taqlid, ablution, ghusl, puberty
              rules) <span>عملی احکام</span>
            </h3>
            <p>اجتہاد و تقلید، وضو، غسل، بلوغ کے احکام</p>
            <a href="/courses" className="btn">
              read more
            </a>
          </div>
        </div>

        <div className="box" data-aos="fade-rleft">
          <div className="image">
            <img src={img7} alt="" />
          </div>
          <div className="content">
            <h3>
              Current Affairs, Insights and Advocacy{" "}
              <span> حالات حاضرہ، بصیرت اور دشمن شناسی</span>
            </h3>
            <a href="/courses" className="btn">
              read more
            </a>
          </div>
        </div>

        <div className="box" data-aos="fade-right">
          <div className="image">
            <img src={img8} alt="" />
          </div>
          <div className="content">
            <h3>
              successful life <span> کامیاب زندگی</span>
            </h3>
            <a href="/courses" className="btn">
              read more
            </a>
          </div>
        </div>

        <div className="box" data-aos="fade-left">
          <div className="image">
            <img src={img9} alt="" />
          </div>
          <div className="content">
            <h3>
              Effects of media and social media{" "}
              <span> میڈیا اور سوشل میڈیا کے اثرات</span>
            </h3>
            <a href="/courses" className="btn">
              read more
            </a>
          </div>
        </div>

        <div className="box" data-aos="fade-down">
          <div className="image">
            <img src={img10} alt="" />
          </div>
          <div className="content">
            <h3>
              Arabic and Persian language courses{" "}
              <span> عربی اور فارسی زبان کے کورسز</span>
            </h3>
            <a href="/courses" className="btn">
              read more
            </a>
          </div>
        </div>

        <div className="box" data-aos="fade-up">
          <div className="image">
            <img src={img11} alt="" />
          </div>
          <div className="content">
            <h3>
              prudence in Quran <span> تدبر قرآن کریم</span>
            </h3>
            <a href="/courses" className="btn">
              read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeCourses;
