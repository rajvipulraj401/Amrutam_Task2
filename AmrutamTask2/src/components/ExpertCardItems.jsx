import React from "react";

const ExpertCardItems = () => {
  return (
    <>
      {" "}
      <div className="Experts 1">
        <div className="ExpertContents">
          <div className="ExpertPic">
            <img src="ExpertPic.png" alt="" />
          </div>

          <div className="ExpertRating">4.5 ⭐</div>

          {/* -----------------initials */}

          <div className="ExpertInitials">
            <h2>Dr. Vaishali Sharma</h2>

            <h3>Ayurveda Practitioner (BAMS ,MD)</h3>

            <div className="Experience">
              <img src="Hat.png" alt="" />
              <h4>25 years of experience</h4>
            </div>

            <div className="initials">
              <img src="Frame.png" alt="" />
              <h4>Skin Specialist</h4>
            </div>
          </div>
        </div>

        <div className="greenBox">Book a session</div>
      </div>
    </>
  );
};

export default ExpertCardItems;
