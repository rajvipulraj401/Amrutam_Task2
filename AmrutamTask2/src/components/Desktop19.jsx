import React from "react";

const Desktop19 = () => {
  return (
    <div className="Desktop-19">
      <div className="row1 uniqueEffect2">
        <h3>What sets Ayurvedic consultations apart?</h3>
      </div>

      {/* ------------------------------GRID PORTION ---------------------------- */}
      <div className="container">
        <div className="item Spanning2 green ">
          <div className="part1 ">
            <h4>
              {" "}
              स्वस्थस्य स्वास्थ्य रक्षणं,<br></br> आतुरस्य विकार प्रशमनं ।"
            </h4>
          </div>
          <div className="part2">
            <p>
              [ Meaning: The Goal of Ayurveda is to maintain the<br></br> health
              of a healthy person and to cure the disease of a diseased person.
              ]
            </p>
          </div>
        </div>
        <div className="item pics uniquePic">
          <img src="  hairyGirls.png" alt="" />
        </div>

        <div className="item green black">
          <h4>Precise Diagnosis</h4>
          <p>
            Ayurveda's core principles revolve around Vata, Pitta, and Kapha
            doshas, guiding you with precise diagnosis and treatment.
          </p>
        </div>
        <div className="item green black SEcondRow1col">
          <h4>Zero side-effects</h4>
          <p>
            Ayurveda's core principles revolve around Vata, Pitta, and Kapha
            doshas, guiding you with precise diagnosis and treatment.
          </p>
        </div>
        <div className="item pics">
          <img src="  HerbBox.png" alt="" />
        </div>
        <div className="item green black">
          <h4>Individual Treatment</h4>
          <p>
            all Treatments are personalized based on a person's unique
            constitution and health concerns.
          </p>
        </div>
        <div className="item pics">
          <img src="  GirlPlant.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Desktop19;
