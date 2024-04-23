import React from "react";

const Desktop26 = () => {
  return (
    <div className="Desktop-26">
      <div className="HomeAppContent">
        <div className="adHeading">
          <h3>Amrutam Home App</h3>
          <p>
            The Amrutam Home App is your one-stop app for all things Ayurveda!
            Apart <br></br> from mimicking the significant characteristics of
            our website, this app offers a<br></br> wide range of additional
            features.
          </p>
        </div>
        <div className="Moto">
          <h3>
            Get a diet & lifestyle consultation with <br></br>Ayurvedic experts
            across the globe
          </h3>
        </div>

        <div className="advertising">
          <h2>Get The App Now</h2>
        </div>
        <div className="buttons-Deployed">
          <div className="GooglePlay">
            <div>
              <img src="GooglePlay.png" alt="" />
            </div>
          </div>
          <div className="AppStore">
            <div>
              <img src="AppStore.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* -------------part 1 */}

      <div className="containers">
        {/* <div class="container"> */}
        <div className="circles top-left"></div>
        <div className="circles bottom-right"></div>
        <img src="iPhone13.png" alt="iPhone" className="iphone"></img>
      </div>
    </div>
  );
};

export default Desktop26;
