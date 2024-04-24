import React from "react";
import ExpertCardItems from "./ExpertCardItems";

const Desktop23 = () => {
  return (
    <div className="Desktop-23">
      <div className="row1 uniqueEffect5">
        <h3>Meet Our Ayurveda Experts!</h3>
      </div>
      {/* Row2 ......... */}
      <div className="row2">
        <div className="leftArrow">
          <img src="leftArrow.png" alt="" />
        </div>

        <ExpertCardItems></ExpertCardItems>
        <ExpertCardItems></ExpertCardItems>
        <ExpertCardItems></ExpertCardItems>
        {/* <div className="Experts 1">
          <div className="ExpertContents">
            <div className="ExpertPic">
              <img src="ExpertPic.png" alt="" />
            </div>

            <div className="ExpertRating">4.5 ⭐</div>

            

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

        <div className="Experts  2">
          <div></div>
        </div>
        <div className="Experts   3">
          <div></div>
        </div> */}
        <div className="rightArrow">
          <img src="rightArrow.png" alt="" />
        </div>
      </div>

      {/* ------row2 Ends */}
      <div className="row3">
        <div className="smallCircle Default"></div>
        <div className="smallCircle"></div>
        <div className="smallCircle"></div>
      </div>

      <div className="FindMore">
        <h2> Find more experts </h2>
        <img src="greenArrow.png" alt="" />
      </div>
    </div>
  );
};

export default Desktop23;
