import React from "react";

function Universe() {
  return (
    <div className="container-sm mb-5 pb-5">
      <div className="row text-center">
        <h1 className="fs-3">The Zerodha Universe</h1>
        <p className="pt-4">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-4">
          <div className="mt-4 pt-4">
            <img
              src="media/images/zerodhaFundhouse.png"
              alt="Zerodha Fundhouse"
              style={{ width: "45%" }}
            />
            <p className="pt-3 fw-medium" style={{fontSize: "0.8rem"}}>
              Our asset management venture <br /> that is creating simple and
              transparent index <br /> funds to help you save for your goals.
            </p>
          </div>
          <div className="mt-4 pt-4">
            <img
              src="media/images/streakLogo.png"
              alt="Streak Logo"
              style={{ width: "40%" }}
            />
            <p className="pt-3 fw-medium" style={{fontSize: "0.8rem"}}>
              Systematic trading platform <br /> that allows you to create and backtest <br />
              strategies without coding.
            </p>
          </div>
        </div>
        <div className="col-4 p-4">
          <div className="mt-4 pt-4">
            <img
              src="media/images/sensibullLogo.svg"
              alt="Sensibull Logo"
              style={{ width: "50%" }}
            />
            <p className="pt-3 fw-medium" style={{fontSize: "0.8rem"}}>
              Options trading platform that lets you <br /> create strategies, analyze
              positions, and examine <br /> data points like open interest, FII/DII,
              and more.
            </p>
          </div>
          <div className="mt-4 pt-4">
            <img
              src="media/images/smallcaseLogo.png"
              alt="Small Case Logo"
              style={{ width: "50%" }}
            />
            <p className="pt-3 fw-medium" style={{fontSize: "0.8rem"}}>
              Thematic investing platform <br /> that helps you invest in diversified<br />
              baskets of stocks on ETFs.
            </p>
          </div>
        </div>
        <div className="col-4 p-4">
          <div className="mt-4 pt-4">
            <img
              src="media/images/tijori.svg"
              alt="Tijori"
              style={{ width: "40%" }}
            />
            <p className="pt-3 fw-medium" style={{fontSize: "0.8rem"}}>
              Investment research platform <br /> that offers detailed insights on
              stocks, <br /> sectors, supply chains, and more.
            </p>
          </div>
          <div className="mt-4 pt-4">
            <img
              src="media/images/dittoLogo.png"
              alt="Ditto Logo"
              style={{ width: "30%" }}
            />
            <p className="pt-3 fw-medium" style={{fontSize: "0.8rem"}}>
              Personalized advice on life <br /> and health insurance. No spam <br /> and no
              mis-selling.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Universe;
