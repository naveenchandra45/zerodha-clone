import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState();
  const [stockPrice, setStockPrice] = useState();
  const { closeBuyWindow } = useContext(GeneralContext);

  useEffect(() => {
    async function fetchStockData() {
      try {
        const response = await axios.get(
          `http://localhost:8080/allwatchlist/${uid}`,
        );
        setStockPrice(response.data.price);
        setStockQuantity(response.data.quantity);
      } catch (error) {
        console.error("Error fetching stock data:", error);
      }
    }

    if (uid) {
      fetchStockData();
    }
  }, [uid]);

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/newOrder", {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: "BUY",
      })
      .then(() => closeBuyWindow());
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
              style={{ backgroundColor: "transparent" }}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
              style={{ backgroundColor: "transparent" }}
            />
          </fieldset>
        </div>
        <div className="buttons">
          <button type="submit" className="btn btn-blue">
            Buy
          </button>
          <button
            type="button"
            className="btn btn-grey"
            onClick={closeBuyWindow}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default BuyActionWindow;
