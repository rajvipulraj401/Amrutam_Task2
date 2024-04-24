import React from "react";

const Card = ({ location }) => {
  return (
    <div>
      <div className="card 1">
        <div className="top">Consulted for Skin</div>
        <div className="content">
          <div className="info">
            <div className="circle"></div>
            <div className="info-text">
              <div className="naming">Sophie Moore</div>
              <div className="locations">{location}</div>
            </div>
            <div className="date">17/02/24</div>
          </div>

          <div className="rating">
            <div className="stars5">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <div className="review">"One of a Kind service"</div>
            <div className="text">
              Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra
              diam sit amet nisl suscipit adipis.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
