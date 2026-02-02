import React from "react";

function Hero() {
  return (
    <div className="container-sm">
      <div className="row p-5">
        <div className="text-center p-5 m-5">
          <h1 className="fs-2">Charges</h1>
          <h2 className="fs-5 mb-5 pb-5" style={{ opacity: "0.5" }}>
            List of all charges and taxes
          </h2>
        </div>
        <div className="col-4 text-center">
          <img src="media/images/pricingMF.svg" alt="Zero rupee" style={{width: "60%"}}/>
          <h1 className="fs-2 mb-4 mt-4">Free equity delivery</h1>
          <p>
            All equity delivery investments (NSE, BSE), <br /> are absolutely
            free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col-4 text-center">
          <img src="media/images/intradayTrades.svg" alt="Twenty rupee" style={{width: "60%"}}/>
          <h1 className="fs-2 mb-4 mt-4">Intraday and F&O trades</h1>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per <br /> executed order on
            intraday trades across <br /> equity, currency, and commodity
            trades. Flat <br /> ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 text-center">
          <img src="media/images/pricing0.svg" alt="Zero rupee" style={{width: "60%"}}/>
          <h1 className="fs-2 mb-4 mt-4">Free direct MF</h1>
          <p>
            All direct mutual fund investments are <br /> absolutely free — ₹ 0
            commissions & DP <br /> charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
