import React from "react";
import Goals from "./goals";
import MajorActivities from "./activities";
import Teachers from "./teachers";

function About() {
  return (
    <>
      <section
        className="heading-link"
        style={{ marginTop: "5rem", background: "#89cff0" }}
      >
        <h3>introduction</h3>
      </section>

      <section className="about">
        <div className="content">
          <p style={{ color: "black" }}>
            The Institute of Quran and Ahl al-Bayt is a Quranic and religious
            institution which has been carrying out Quranic, religious and
            cultural activities for the past {new Date().getFullYear() - 2010}{" "}
            years. The Institute of Quran Education and Ahl al-Bayt (A.S.)
            stands by the side of you parents for the education of children and
            young generation. This institution through its experienced, expert
            and competent teachers has the ability to train your children
            according to the right religious standards and make them a good
            citizen, a pious and responsible person and a true awaited Imam of
            the time.
          </p>
        </div>

        <div className="content">
          <p
            style={{
              color: "red",
              fontFamily: "Noto Nastaliq Urdu",
              lineHeight: "7rem",
            }}
          >
            ادارہ معارف قرآن و اہلبیت ع ایک قرآنی ،دینی ادارہ ہے جو گذشتہ{" "}
            {new Date().getFullYear() - 2010} سالوں سے قرآنی ،دینی اور ثقافتی
            سرگرمیاں انجام دے رہا ہے ۔ ادارہ معارف قرآن و اہلبیت ؑ بچوں اور
            نوجوان نسل کی تربیت کے لیے آپ والدین کے شانہ بشانہ کھڑا ہے ۔ یہ
            ادارہ اپنے باتجربہ، ماہر اور قابل اساتذہ کرام کے ذریعے یہ صلاحیت
            رکھتا ہے کہ آپ کے بچوں کی صحیح دینی معیاروں کے مطابق تربیت کرسکے
            اور انہیں ایک اچھا شہری ، ایک دیندار اور ذمہ دار انسان اور امام
            زمانہ عج کا حقیقی منتظر بنا سکے۔
          </p>
        </div>
      </section>
      <Teachers />
      <MajorActivities />
      <Goals />
    </>
  );
}

export default About;
