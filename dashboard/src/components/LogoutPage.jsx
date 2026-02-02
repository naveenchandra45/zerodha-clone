function LogoutPage() {
  const handleRedirect = () => {
    // Vite requires 'import.meta.env' for frontend variables.
    // Variables must start with 'VITE_' to be accessible in the browser.
    const authUrl = "https://zerodha-clone-plum.vercel.app";
    window.location.href = `${authUrl}/signup`;
  };

  return (
    <div className="container-sm p-5">
      <div className="row text-center ps-3 pe-3 ms-3 me-3 ">
        <div className="col-6">
          <img
            src="logout_illustration.webp"
            alt="Logged out"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-6">
          <h1 className="mt-4">You have been logged out</h1>
          <p className="text-muted fs-4">
            To see your dashboard and trade, please log in again.
          </p>
          <button
            className="btn btn-primary p-3 fs-4 mb-5 rounded-pill"
            style={{ width: "40%", margin: "0 auto" }}
            onClick={handleRedirect}
          >
            Login / Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogoutPage;
