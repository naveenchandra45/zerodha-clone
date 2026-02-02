import { useState, useEffect } from "react";
import axios from "axios";
import { HorizontalBar } from "../chart/HorizontalBar";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/allPositions")
      .then((res) => {
        setAllPositions(res.data);
      })
      .catch((err) => {
        const msg = err.response?.data?.message || "Something went wrong";

        alert(msg);
      });
  }, []);

  const labels = allPositions.map((positionName) => positionName.name);

  const pnlData = allPositions.map((position) => {
    const curValue = position.price * position.qty;
    const pnl = curValue - position.avg * position.qty;
    return Number(pnl.toFixed(2));
  });

  const data = {
    labels,
    datasets: [
      {
        label: "Loss & Profit",
        data: pnlData,

        backgroundColor: pnlData.map((val) =>
          val >= 0 ? "rgba(75, 192, 192, 0.5)" : "rgba(255, 99, 132, 0.5)",
        ),
        borderColor: pnlData.map((val) =>
          val >= 0 ? "rgb(75, 192, 192)" : "rgb(255, 99, 132)",
        ),
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {allPositions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <HorizontalBar data={data}></HorizontalBar>
    </>
  );
};

export default Positions;
