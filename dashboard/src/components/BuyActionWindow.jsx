import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, mode }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const { closeBuyWindow, closeSellWindow } = useContext(GeneralContext);

  const closeWindow = mode === "BUY" ? closeBuyWindow : closeSellWindow;

  useEffect(() => {
    async function fetchStockData() {
      try {
        const response = await axios.get(
          `https://zerodha-clone-ukx9.onrender.com/allwatchlist/${uid}`,
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
      .post("https://zerodha-clone-ukx9.onrender.com/newOrder", {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: mode,
      })
      .then(() => closeWindow());
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              min={1}
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
          <button type="submit" className={`btn ${mode === "BUY" ? "btn-blue" : "btn-red"}`}>
            {mode === "BUY" ? "Buy" : "Sell"}
          </button>
          <button
            type="button"
            className="btn btn-grey"
            onClick={closeWindow}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default BuyActionWindow;
