import React from "react";

const Desktop25 = () => {
  return (
    <div className="Desktop-25">
      <div className="row1">
        <h3>Discover Ayurveda's magic with us</h3>
        <p>
          Ayurvedic treatment aims to balance your body and mind, bringing
          harmony and vitality. It's like a journey to better health using
          ancient wisdom, a totally effective approach for a better life.
        </p>
      </div>
      <div className="row2">
        {/* ------------1 */}
        <div className="column1">
          <div className="wellness well">
            <div className="inside inside1">
              <h3>Personalized Wellness</h3>
              <p>
                Get treatments made just for you based on your individual doshas
                ( body type)
              </p>
            </div>
            <div className="AyurvedaMagicPics image1">
              {/* <img src="heartbeat.png" alt="" /> */}
            </div>
          </div>

          <div className="prevention well">
            <div className="inside inside2">
              <h3>Focus on prevention</h3>
              <p>
                Stop problems even <br></br>before they start.
              </p>
            </div>

            <div className="AyurvedaMagicPics image2">
              {/* <img src=" ribbon.png" alt="" /> */}
            </div>
          </div>
          <div className="connection well">
            <div className="inside inside3">
              <h3>Mind-Body Connection</h3>
              <p>Keep your mind and body in sync for a happy life.</p>
            </div>
            <div className="AyurvedaMagicPics image3">
              {/* <img src=" lotus-position.png" alt="" /> */}
            </div>
          </div>
        </div>

        {/* ---------------2--- */}
        <div className="column2 meditationImg">
          <img src="  GirlYoga.png" alt="" />
        </div>

        {/* -------------------------3 */}
        <div className="column3">
          <div className="healing">
            <h3>Holistic Healing</h3>
            <p>Fix the root problem for long-lasting health.</p>
            <img src=" protection.png" alt="" />
          </div>

          <div className="remedies">
            <h3>Natural Remedies</h3>
            <p>Using herbs and natural therapies for healing..</p>
            <img src=" ayurveda.png" alt="" />
          </div>
          <div className="immunity">
            <h3>Boosting immunity</h3>
            <p>Stay strong and healthy for life , not just for today.</p>
            <img src=" strong.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop25;
