import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios
      .get("https://zerodha-clone-ukx9.onrender.com/order")
      .then((res) => {
        setAllOrders(res.data);
      })
      .catch((err) => {
        const msg = err.response?.data?.message || "Something went wrong";
      });
  }, []);

  return (
    <div>
      {allOrders.length > 0 ? (
        <div className="orders">
          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>S.NO.</th>
                  <th>Date</th>
                  <th>Stock</th>
                  <th>Qty.</th>
                  <th>Price</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                {allOrders.map((list, index) => {
                  return (
                    <tr key={list._id}>
                      <td>{index + 1}</td>
                      <td>{new Date(list.date).toLocaleDateString("en-GB")}</td>
                      <td>{list.name}</td>
                      <td>{list.qty}</td>
                      <td>{list.price}</td>
                      <td>{list.mode}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      )}
    </div>
  );
};

export default Orders;
