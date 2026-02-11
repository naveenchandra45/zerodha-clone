
import React, { useEffect, useState } from "react";
import axios from "axios";
import { AgFinancialCharts } from "ag-charts-react";
import "./Analytics.css";
import { ModuleRegistry, FinancialChartModule} from "ag-charts-enterprise";

ModuleRegistry.registerModules([FinancialChartModule]);

const Analytic = ({ uid, close }) => {
  const [options, setOptions] = useState({data: []});

  useEffect(() => {
    axios.get("https://zerodha-clone-ukx9.onrender.com/allAnalytic")
    .then((res) => {
      const formattedData = res.data.map((item) => ({
        ...item,
        date: new Date(item.date), 
      }));

      setOptions((prev) => ({
          ...prev,
          data: formattedData,
        }));
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])

  return (
    <div className="analytics-modal">
      <div className="analytics-container">
        <div className="analytics-header">
          <span>{uid} Chart</span>
          <button className="close-btn" onClick={close}>
            Close
          </button>
        </div>
        <AgFinancialCharts options={options} />
      </div>
    </div>
  );
};

export default Analytic;
