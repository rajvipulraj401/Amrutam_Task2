import React from "react";

const Desktop23 = () => {
  return (
    <div className="Desktop-23">
      <div className="row1">
        <h3>Meet Our Ayurveda Experts!</h3>
      </div>
      <div className="row2">
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

        {/* --------------------------------------------- */}
        <div className="Experts  2">
          <div></div>
        </div>
        <div className="Experts   3">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Desktop23;
