import React from "react";
import Feature from "./Feature";

const Features = () => {
  return (
    <>
      <div className="features">
        {/* Featuree 1...... */}
        <Feature
          featureImg="speech-bubble.png"
          Text="Convenient online & In-clinic consultations"
        ></Feature>
        {/* Feature 2---- */}
        <Feature
          featureImg="shield.png"
          Text="Safe and effective treatment"
        ></Feature>
        {/* Feature 3 */}
        <Feature
          featureImg="doctor.png"
          Text="Experienced Ayurvedic Practitioners"
        ></Feature>
        {/* feature 4 */}
        <Feature
          featureImg="prescription.png"
          Text="Personalized Treatment 
          Plans & Guidance"
        ></Feature>

        {/* we will just send the props (image and text ) */}
        {/* <div className="feature 1">
          <div className="circleDiv">
            <img src="speech-bubble.png" alt="" />
          </div>
          <div>
            <h4>convenient online & In-clinic consultations</h4>
          </div>
        </div> */}

        {/* <div className="feature 2">
          <div className="circleDiv">
            <img src="speech-bubble.png" alt="" />
          </div>
          <div>
            <h4>convenient online & In-clinic consultations</h4>
          </div>
        </div>

        <div className="feature 3">
          <div className="circleDiv">
            <img src="speech-bubble.png" alt="" />
          </div>
          <div>
            <h4>convenient online & In-clinic consultations</h4>
          </div>
        </div>

        <div className="feature 4">
          <div className="circleDiv">
            <img src="speech-bubble.png" alt="" />
          </div>
          <div>
            <h4>convenient online & In-clinic consultations</h4>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Features;
