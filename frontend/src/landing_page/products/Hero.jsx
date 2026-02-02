import React from "react";

function Hero(){
    return(
        <div className="container-sm border-bottom">
            <div className="row m-3">
                <div className="col text-center m-5 p-5">
                    <h1 className="fs-2 lh-lg">Zerodha Products</h1>
                    <h2 className="fs-5 fw-normal lh-lg">Sleek, modern, and intuitive trading platforms</h2>
                    <p className="fw-normal lh-lg" style={{fontSize: "1.1rem"}}>Check out our <a href="" style={{textDecoration: "none"}}> investment offerings → </a></p>
                </div>
            </div>
        </div>
    );
}

export default Hero;