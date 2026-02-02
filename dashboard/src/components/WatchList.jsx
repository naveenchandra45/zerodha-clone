import React, { useState, useContext, useEffect } from "react";
import axios from "axios"
import Tooltip from "@mui/material/Tooltip";
import Grow from "@mui/material/Grow";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import BarChartIcon from "@mui/icons-material/BarChart";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import GeneralContext from "./GeneralContext";
import { DoughnutChart } from "../chart/DoughnutChart";

const WatchList = () => {
  const [allWatchList, setAllWatchList] = useState([])

  useEffect (() => {
    axios.get("https://zerodha-clone-ukx9.onrender.com/allwatchlist")
    .then((res) => {
      setAllWatchList(res.data);
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  const labels = allWatchList.map((watchlistName) => watchlistName.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: allWatchList.map((list) => list.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {allWatchList.length} / 50</span>
      </div>

      <ul className="list">
        {allWatchList.map((stock, index) => {
          return <WatchListItem stock={stock} key={index}></WatchListItem>;
        })}
      </ul>
      <DoughnutChart data={data}></DoughnutChart>
    </div>
  );
};

export default WatchList;

function WatchListItem({ stock }) {
  const [showWatchListAction, setShowWatchListAction] = useState(false);

  const handleMouseEnter = (event) => {
    setShowWatchListAction(true);
  };

  const handleMouseLeave = (event) => {
    setShowWatchListAction(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDownIcon className="down" />
          ) : (
            <KeyboardArrowUpIcon />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListAction && <WatchListAction uid={stock.name} />}
    </li>
  );
}

function WatchListAction({ uid }) {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  return (
    <div className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          slots={{
            transition: Grow,
          }}
        >
          <button className="buy" onClick={handleBuyClick}>
            Buy
          </button>
        </Tooltip>
      </span>
      <span>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          slots={{
            transition: Grow,
          }}
        >
          <button className="sell">sell</button>
        </Tooltip>
      </span>
      <span>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          slots={{
            transition: Grow,
          }}
        >
          <button>
            <BarChartIcon className="icon"></BarChartIcon>
          </button>
        </Tooltip>
      </span>
      <span>
        <Tooltip
          title="More"
          placement="top"
          arrow
          slots={{
            transition: Grow,
          }}
        >
          <button>
            <MoreHorizIcon className="icon"></MoreHorizIcon>
          </button>
        </Tooltip>
      </span>
    </div>
  );
}
