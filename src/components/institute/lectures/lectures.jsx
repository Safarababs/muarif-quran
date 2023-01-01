import React from "react";

function Lecture() {
  return (
    <section className="lecture">
      <div className="box-container">
        <div className="box">
          <div className="image">
            <iframe
              className="video"
              src="https://www.youtube.com/embed/videoseries?list=PLnw4Px6isrYRMwqSbl3txwOUlSh70oYP-"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
          </div>
          <div className="content">
            <h3>Mafaheem-e-quran</h3>
            <p>
              learn by yourself that how to translte in quran. found your
              lecture here and visit us in youtube
            </p>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <iframe
              className="video"
              src="https://www.youtube.com/embed/videoseries?list=PLnw4Px6isrYR6NtuAOt6RsZotYGGjOktb"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
          </div>
          <div className="content">
            <h3>tafseer-al-quran</h3>
            <p>
              tafseer al quran by molana syed sajjad hussain naqvi phd in
              tafseer quran from qom iran
            </p>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <iframe
              className="video"
              src="https://www.youtube.com/embed/videoseries?list=PLnw4Px6isrYQ5X1xsr4Qy1DmW62xUNsmn"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
          </div>
          <div className="content">
            <h3>fiqee ahakaam</h3>
            <p>
              learn all ahakaam in fika imam jaffar sadiq a.S by molana syed
              sajjad hussain naqvi phd in tafseer quran from qom iran
            </p>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <iframe
              className="video"
              src="https://www.youtube.com/embed/videoseries?list=PLnw4Px6isrYTi3FJi0M4qnosK4QDzcHbc"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
          </div>
          <div className="content">
            <h3>tajweed-e-quran</h3>
            <p>
              learn tajweed and learn how to read quran properly by molana syed
              sajjad hussain naqvi phd in tafseer quran from qom iran
            </p>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <iframe
              className="video"
              src="https://www.youtube.com/embed/videoseries?list=PLnw4Px6isrYT1pxcmfRECpt-VSObJFZIa"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
          </div>
          <div className="content">
            <h3>karbala shanasi</h3>
            <p>
              lectures by molana syed sajjad hussain naqvi phd in tafseer quran
              from qom iran
            </p>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <iframe
              className="video"
              src="https://www.youtube.com/embed/videoseries?list=PLnw4Px6isrYSsr_2jiXxr7owjZMH_ZGUz"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
          </div>
          <div className="content">
            <h3>persian language</h3>
            <p>
              learn persian by molana syed sajjad hussain naqvi phd in tafseer
              quran from qom iran
            </p>
          </div>
        </div>

        <div className="box">
          <div className="image">
            <iframe
              className="video"
              src="https://www.youtube.com/embed/videoseries?list=PLnw4Px6isrYR-964ppkk0sd04ixoMyVZU"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
          </div>
          <div className="content">
            <h3>arabic language</h3>
            <p>
              learn arabic language by molana syed sajjad hussain naqvi phd in
              tafseer quran from qom iran
            </p>
          </div>
        </div>
        <video width="320" height="240" autoplay>
          <source src="https://youtu.be/mQh5IVPi2aE" type="video/mp4"></source>
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default Lecture;
