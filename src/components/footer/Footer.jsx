import "./footer.css";
function Footer() {
  return (
    <section className="footer">
      <div className="box-container">
        <div className="box">
          <h3 className="heading">
            {" "}
            <span>why choose us?</span>{" "}
          </h3>
          <p>
            Islam is on your door step, Learn online mafaheem e quran, tafseer e quran, tajweed, asan faqee ahakhaam and much more by molana dr. syed sajjad hussain naqvi pHD in tafseer e quran and many other directorate level faculity
          </p>
        </div>

        <div className="box">
          <h3 className="heading">
            {" "}
            <span>locations</span>{" "}
          </h3>
          <a href="/contact">Pakistan</a>
          <a href="/contact">Iran</a>
        </div>

        <div className="box">
          <h3 className="heading">
            {" "}
            <span>quick links</span>{" "}
          </h3>
          <a href="/">home</a>
          <a href="/about">about</a>

          <a href="/lectures">lectures</a>

          <a href="/contact">contact</a>
        </div>

        <div className="box">
          <h3 className="heading">
            <span>contact us</span>
          </h3>
          <p>
            <a
              href="https://wa.me/989388030994/?text=I%20need%20some%20information%20can%20i%20?"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-whatsapp"></i>whatsapp us
            </a>
          </p>
          <p>
            <a
              href="mailto:sajjadnaqvi9797@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-envelope"></i> Email us
            </a>
          </p>
          <p>
            <a
              href="https://www.youtube.com/channel/UCmvODTtMxqu0--sBAZispHg"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-youtube"></i> youtube official
            </a>
          </p>
        </div>
      </div>

      <div className="header-1">
        <div className="form-container">
          <div className="marquee">
            <p>اللّهُمّ كُنْ لِوَلِيّكَ الحُجّةِ ابْنِ الحَسَنِ

صَلَوَاتُكَ عَلَيْهِ وَعَلَى آبَائِهِ

فِي هذِهِ السَّاعَةِ وَفي كُلّ سَاعَةٍ

وَلِيّاً وَحَافِظاً

وَقَائِداً وَنَاصِراً

وَدَلِيلاً وَعَيْناً

حَتَّى تُسْكِنَهُ أَرْضَكَ طَوْعاً

وَتُمَتّعَهُ فِيهَا طَوِيلاً.</p>
          </div>
        </div>
      </div>

      <h1 className="credit">
        copyright © <span>mr. safar abbas</span> @ {new Date().getFullYear()} |
        all rights reserved!
      </h1>
    </section>
  );
}

export default Footer;


