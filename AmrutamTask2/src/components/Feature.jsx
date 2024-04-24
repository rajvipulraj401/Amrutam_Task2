import React from "react";

const Feature = ({ featureImg, Text }) => {
  return (
    <>
      <div className="feature 1">
        <div className="circleDiv">
          <img src={featureImg} alt="" />
        </div>
        <div>
          <h4>{Text}</h4>
        </div>
      </div>
    </>
  );
};

export default Feature;
