import React from "react";
import Goals from "./goals";
import MajorActivities from "./activities";
import Teachers from "../teachers/teachers";
import Cultural from "./cultural";
import BackendCall from "../institute/BackendCall";
import "./about.css";

function About() {
  return (
    <>
      <section className="about">
        <h1 className="heading">
          <span>The Institute of Quran and Ahlul-Bayt</span>
        </h1>
        <div className="row">
          <div className="content">
            <p
              style={{
                color: "red",
                fontFamily: "Noto Nastaliq Urdu",
                lineHeight: "7rem",
                textAlignLast: "right",
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
        </div>
        <div className="row">
          <div className="content">
            <p style={{ color: "black" }}>
              The Institute of Quran and Ahl al-Bayt is a Quranic and religious
              institution which has been carrying out Quranic, religious and
              cultural activities for the past {new Date().getFullYear() - 2010}{" "}
              years. The Institute of Quran Education and Ahl al-Bayt (A.S.)
              stands by the side of you parents for the education of children
              and young generation. This institution through its experienced,
              expert and competent teachers has the ability to train your
              children according to the right religious standards and make them
              a good citizen, a pious and responsible person and a true awaited
              Imam of the time.
            </p>
          </div>
        </div>
      </section>

      <MajorActivities />
      <Teachers />
      <Goals />
      <Cultural />
      <BackendCall />
    </>
  );
}

export default About;
