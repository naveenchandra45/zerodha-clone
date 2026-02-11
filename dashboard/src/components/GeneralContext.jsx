import React, { useState, createContext } from "react";

import BuyActionWindow from "./BuyActionWindow";
import Analytic from "../Candle-stick/Analytic";

const GeneralContext = createContext({
  openBuyWindow: (uid) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid) => {},
  closeSellWindow: () => {},
  openAnalyticsWindow: (uid) => {},
  closeAnalyticsWindow: () => {},
});

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [isAnalyticsWindowOpen, setIsAnalyticsWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  // Buy Window Handlers
  const handleOpenBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  // Sell Window Handlers
  const handleOpenSellWindow = (uid) => {
    setIsSellWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };

  //Analytics Window handler
    const handleOpenAnalyticsWindow = (uid) => {
    setIsAnalyticsWindowOpen(true)
    setSelectedStockUID(uid);
  };

  const handleCloseAnalyticsWindow = () => {
    setIsAnalyticsWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow: handleOpenBuyWindow,
        closeBuyWindow: handleCloseBuyWindow,

        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,

        openAnalyticsWindow: handleOpenAnalyticsWindow,
        closeAnalyticsWindow: handleCloseAnalyticsWindow
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} mode="BUY" />}

      {isSellWindowOpen && <BuyActionWindow uid={selectedStockUID} mode="SELL" />}

      {isAnalyticsWindowOpen && (
        <Analytic 
          uid={selectedStockUID} 
          close={handleCloseAnalyticsWindow} 
        />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
