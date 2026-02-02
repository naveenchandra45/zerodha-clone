import { Link } from "react-router-dom";

function OpenAccount() {
  return (
    <div className="row text-center">
      <h1 className="mt-5">Open a Zerodha account</h1>
      <p>
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O
        trades.
      </p>
      <Link
        to="/signup"
        className="btn btn-primary p-3 fs-5 mb-5"
        style={{ width: "18%", margin: "0 auto" }}
      >
        Sign up for free
      </Link>
    </div>
  );
}

export default OpenAccount;
