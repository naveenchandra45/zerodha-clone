import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container-sm">
      <div className="row p-5">
        <div className="col-7 p-5 ">
          <img src={imageURL} />
        </div>
        <div className="col-5 p-5 mt-5">
          <h1 className="fs-3">{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href="" className="me-5 text-decoration-none fw-medium">
              {tryDemo}
            </a>
            <a href="" className="text-decoration-none fw-medium">
              {learnMore}
            </a>
          </div>
          <div className="mt-4">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="GooglePlay Store"
              />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" alt="Apps store" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
