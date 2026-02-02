function Team() {
  return (
    <div className="container-sm mb-5 pb-5">
      <div className="row">
        <h1 className="text-center mb-5">People</h1>
        <div className="col m-5 text-center">
          <img src="media/images/nithinKamath.jpg" alt="Nitin Kamath" className="rounded-circle" style={{width: "60%"}} />
          <p className="fs-5 mt-4">Nitin Kamath</p>
          <p style={{opacity: "0.7", fontSize: "1rem"}}>Founder, CEO</p>
        </div>
        <div className="col m-5">
          <p className="lh-lg mb-4">
            {" "}
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the{" "}
            <br />
            hurdles he faced during his decade long stint as a trader. Today,
            <br />
            Zerodha has changed the landscape of the Indian broking industry.{" "}
            <br />
          </p>

          <p className="lh-lg mb-4">
            He is a member of the SEBI Secondary Market Advisory Committee{" "}
            <br />
            (SMAC) and the Market Data Advisory Committee (MDAC). <br />
          </p>

          <p className="lh-lg mb-4">Playing basketball is his zen.</p>

          <p className="lh-lg">Connect on Homepage / TradingQnA / Twitter</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
