import React from "react";
import Features from "./Features";

const Desktop24 = () => {
  return (
    <div className="Desktop-24">
      <div className="header">
        <div className="headerContent">
          <h5> Namaste ,Welcome to Amrutam</h5>

          <h2>
            Step into Holistic Healing with
            <span>{/* <u>Ayurveda</u> */} Ayurveda</span>
            {/*<br></br>*/} Book Consultation With Certified Experts.
          </h2>
          <p>
            Dive into the world of ayurveda and Experience Personalized Health
            Solutions and {/*<br></br>*/} Holistic Guidance from Trusted
            Ayurvedic Doctors Anytime, anywhere.
          </p>

          <button>BOOK AN APPOINTMENT</button>
        </div>
      </div>

      <Features></Features>
    </div>
  );
};

export default Desktop24;
