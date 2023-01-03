import React from "react";
import BackendCall from "./BackendCall";

function Prayers() {
  const pray = [
    "اللھم ارزقنا شفاعۃ الحسین یوم الورود",
    "اللھم ارزقنا فی الدنیا زیارۃ الحسین",
    "اللھم اکتبنا من زوار الحسین",
    "اللھم اجعلنا من الباقین فی عزا الحسین",
    "اللھم صل علی محمد وآل محمد",
    "اللھم احشرنا فی زمرۃ الحسین",
    "اللھم ادخلناالجنۃ من باب الحسین",
    "ٓالسلام علیک یا ابا عبداللہ الحسین و علی اولاد الحسین وعلی اصحاب الحسین",
  ];

  function Prayers() {
    return (
      <h3
        style={{
          color: "white",
          fontSize: "2rem",
          fontFamily: "Noto Nastaliq Urdu",
          lineHeight: "5rem",
          letterSpacing: ".1rem",
        }}
      >
        {pray[Math.floor(Math.random() * pray.length)]}
      </h3>
    );
  }
  return (
    <section
      className="heading-link"
      style={{ marginTop: "0", background: "skyblue" }}
    >
      {Prayers()}
      <BackendCall />
    </section>
  );
}

export default Prayers;
