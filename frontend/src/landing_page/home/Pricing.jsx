import React from "react";
import "./Pricing.css";

function Pricing() {
  return (
    <div className="container p-5 m-5">
      <div className="row">
        <div className="col-4">
          <h1>Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" style={{ textDecoration: "none" }}>
            See pricing <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
        <div className="pricing-text col-2">
          <img src="media\images\pricing0.svg" alt="pricing" />
          <p>
            Free account <br /> opening
          </p>
        </div>
        <div className="pricing-text col-3">
          <img
            src="media\images\pricing0.svg"
            alt="pricing"
            style={{ width: "50%", left: "1rem" }}
          />
          <p style={{ right: "4rem" }}>
            Free equity delivery <br /> and direct mutual funds
          </p>
        </div>
        <div className="col-3 pricing-text">
          <img src="media\images\other-trades.svg" alt="pricing" style={{width: "50%"}}/>
          <p style={{right: "6.5rem", bottom: "2.7rem"}}>
            Intraday and <br /> F&O
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
