import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="p-4 m-4">
      <div className="row text-center d-flex justify-content-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className=""
          style={{ width: "60%" }}
        />
        <h1 className="mt-5 fs-2">Invest in everything</h1>
        <p className="fs-5">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <Link
          to="/signup"
          className="btn btn-primary p-3 fs-5 mb-5"
          style={{ width: "18%", margin: "0 auto" }}
        >
          Sign up for free
        </Link>
      </div>
    </div>
  );
}

export default Hero;
