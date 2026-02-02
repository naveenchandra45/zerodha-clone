import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container-sm">
      <div className="row p-5">
        <div className="col-5 p-5 mt-5">
          <h1 className="fs-3">{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href="" className="text-decoration-none fw-medium">
              {learnMore}
            </a>
          </div>
        </div>
        <div className="col-7 p-5 ">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
