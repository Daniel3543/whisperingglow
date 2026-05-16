import React from "react";
import "./Reviews.css";

import img1 from "../images/people/miniOne.png";
import img2 from "../images/people/miniTwo.png";
import img3 from "../images/people/miniThree.png";

export default function Reviews() {
  return (
    <div className="reviews">
      <div className="box">
        <h3>YOUR REVIEWS</h3>

        <div className="cards">
          <div className="card">
            <div className="card-top">
              <img src={img1} alt="" />
              <h4>Anastasia</h4>
            </div>
            <p>
              Absolutely in love. The fragrances are divine and fill my home
              with such warmth and comfort.
            </p>
          </div>

          <div className="card">
            <div className="card-top">
              <img src={img2} alt="" />
              <h4>Lily</h4>
            </div>
            <p>
              The scents are long-lasting and not overpowering. Will definitely
              be a repeat customer!
            </p>
          </div>

          <div className="card">
            <div className="card-top">
              <img src={img3} alt="" />
              <h4>Anna</h4>
            </div>
            <p>
              My new go-to for all things candle-related! Highly recommend!
            </p>
          </div>
        </div>

        <div className="line1">
          <div className="main1"></div>
        </div>
      </div>
    </div>
  );
}