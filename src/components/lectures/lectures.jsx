import React from "react";
import "./lectures.css";

function Lecture() {
  const lectures = [
    {
      id: 1,
      src: "https://www.youtube.com/embed/videoseries?list=PLnw4Px6isrYT1pxcmfRECpt-VSObJFZIa",
      alt: "Image 1",
      title: "karbala shanasi",
      details:
        "get to know about real fact about karbala and these lectures by molana syed sajjad hussain naqvi phd in tafseer quran from qom iran",
    },
    {
      id: 2,
      src: "https://www.youtube.com/embed/videoseries?list=PLnw4Px6isrYTi3FJi0M4qnosK4QDzcHbc",
      alt: "Image 1",
      title: "tajweed-e-quran",
      details:
        "learn tajweed and learn how to read quran properly by molana syed sajjad hussain naqvi phd in tafseer quran from qom iran",
    },
    {
      id: 3,
      src: "https://www.youtube.com/embed/videoseries?list=PLnw4Px6isrYR1vpoFjBxmI87sIs_bMR2d",
      alt: "Image 1",
      title: "Mafaheem-e-quran book 1",
      details:
        "learn by yourself that how to translate in quran. found your lecture here and visit us in youtube",
    },
    {
      id: 4,
      src: "https://www.youtube.com/embed/videoseries?list=PLnw4Px6isrYRMwqSbl3txwOUlSh70oYP-",
      alt: "Image 1",
      title: "Mafaheem-e-quran book 2",
      details:
        "learn by yourself that how to translate in quran. found your lecture here and visit us in youtube",
    },
    {
      id: 5,
      src: "https://www.youtube.com/embed/videoseries?list=PLnw4Px6isrYTzzbiqFNv2iDlbHLDXPIJQ",
      alt: "Image 1",
      title: "Mafaheem-e-quran book 3",
      details:
        "learn by yourself that how to translate in quran. found your lecture here and visit us in youtube",
    },
    {
      id: 6,
      src: "https://www.youtube.com/embed/videoseries?list=PLnw4Px6isrYR6NtuAOt6RsZotYGGjOktb",
      alt: "Image 1",
      title: "tafseer-e-quran",
      details:
        "learn by yourself that how to translate in quran. found your lecture here and visit us in youtube",
    },
    {
      id: 7,
      src: "https://www.youtube.com/embed/videoseries?list=PLnw4Px6isrYQ5X1xsr4Qy1DmW62xUNsmn",
      alt: "Image 1",
      title: "fiqee ahakaam",
      details:
        "learn all ahakaam in fika imam jaffar sadiq a.S by molana syed sajjad hussain naqvi phd in tafseer quran from qom iran",
    },

    {
      id: 8,
      src: "https://www.youtube.com/embed/videoseries?list=PLnw4Px6isrYSsr_2jiXxr7owjZMH_ZGUz",
      alt: "Image 1",
      title: "persian language",
      details:
        "learn persian by molana syed sajjad hussain naqvi phd in tafseer quran from qom iran",
    },
    {
      id: 9,
      src: "https://www.youtube.com/embed/videoseries?list=PLnw4Px6isrYR-964ppkk0sd04ixoMyVZU",
      alt: "Image 1",
      title: "arabic language",
      details:
        "learn arabic by molana syed sajjad hussain naqvi phd in tafseer quran from qom iran",
    },
  ];

  return (
    <section className="lecture">
      <h1 className="heading">
        <span>Here you can find all previos lectures</span>
      </h1>
      <div className="box-container">
        {lectures.map((lecture) => (
          <div className="box" key={lecture.id}>
            <iframe
              src={lecture.src}
              title="YouTube video player"
              allowFullScreen
            ></iframe>
            <div className="info">
              <h3>{lecture.title}</h3>
              <span>{lecture.details}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Lecture;
