import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import "./ChargesTab.css";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ChargesTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="container-sm">
      <div className="row">
        <Box>
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              className="ms-5 me-5 ps-5 pe-5"
            >
              <Tab
                className="fs-5 fw-semibold"
                label="Equity"
                {...a11yProps(0)}
              />
              <Tab
                className="fs-5 fw-semibold"
                label="Currency"
                {...a11yProps(1)}
              />
              <Tab
                className="fs-5 fw-semibold"
                label="Commodity"
                {...a11yProps(2)}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div className="equity-tab ms-5 me-5 ps-5 pe-5">
              <table>
                <caption className="fs-5 text-center mt-4">
                  <a href="" className="text-decoration-none">
                    Calculate your costs upfront
                  </a>{" "}
                  using our brokerage calculator
                </caption>
                <thead>
                  <tr className="thead">
                    <th></th>
                    <th>Equity delivery</th>
                    <th>Equity intraday</th>
                    <th>F&O - Futures</th>
                    <th>F&O - Options</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="text-muted">Brokerage</th>
                    <td>Zero Brokerage</td>
                    <td>
                      {" "}
                      0.03% or Rs. 20/executed <br /> order whichever is lower
                    </td>
                    <td>
                      0.03% or Rs. 20/executed <br /> order whichever is lower
                    </td>
                    <td>Flat Rs. 20 per executed order</td>
                  </tr>
                  <tr>
                    <th className="text-muted">STT/CTT</th>
                    <td>0.1% on buy & sell</td>
                    <td>0.025% on the sell side</td>
                    <td>0.02% on the sell side</td>
                    <td>
                      <li>
                        0.125% of the intrinsic value on <br /> options that are
                        bought and <br /> exercised
                      </li>
                      <li>0.1% on sell side (on premium)</li>
                    </td>
                  </tr>
                  <tr>
                    <th className="text-muted">
                      Transaction <br /> charges
                    </th>
                    <td>
                      NSE: 0.00297% <br /> BSE: 0.00375%
                    </td>
                    <td>
                      NSE: 0.00297% <br />
                      BSE: 0.00375%
                    </td>
                    <td>
                      NSE: 0.00173% <br /> BSE: 0
                    </td>
                    <td>
                      NSE: 0.03503% (on premium) <br />
                      BSE: 0.0325% (on premium)
                    </td>
                  </tr>
                  <tr>
                    <th className="text-muted">GST</th>
                    <td>
                      18% on (brokerage + SEBI <br /> charges + transaction{" "}
                      <br /> charges)
                    </td>
                    <td>
                      18% on (brokerage + SEBI <br /> charges + transaction{" "}
                      <br /> charges)
                    </td>
                    <td>
                      18% on (brokerage + SEBI <br /> charges + transaction{" "}
                      <br /> charges)
                    </td>
                    <td>
                      18% on (brokerage + SEBI charges <br /> + transaction
                      charges)
                    </td>
                  </tr>
                  <tr>
                    <th className="text-muted">SEBI charges</th>
                    <td>₹10 / crore</td>
                    <td>₹10 / crore</td>
                    <td>₹10 / crore</td>
                    <td>₹10 / crore</td>
                  </tr>
                  <tr>
                    <th className="text-muted">Stamp charges</th>
                    <td>
                      0.015% or ₹1500 / crore on <br /> buy side
                    </td>
                    <td>
                      0.003% or ₹300 / crore on <br /> buy side
                    </td>
                    <td>
                      0.002% or ₹200 / crore on <br /> buy side
                    </td>
                    <td>0.003% or ₹300 / crore on buy side</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div className="currency-tab ms-5 me-5 ps-5 pe-5">
              <table>
                <caption className="fs-5 text-center mt-4">
                  <a href="" className="text-decoration-none">
                    Calculate your costs upfront
                  </a>{" "}
                  using our brokerage calculator
                </caption>
                <thead>
                  <tr className="thead">
                    <th></th>
                    <th>Currency futures</th>
                    <th>Currency options</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="text-muted">Brokerage</th>
                    <td>0.03% or ₹ 20/executed order whichever is lower</td>
                    <td>₹ 20/executed order</td>
                  </tr>
                  <tr>
                    <th className="text-muted">STT/CTT</th>
                    <td>No STT</td>
                    <td>No STT</td>
                  </tr>
                  <tr>
                    <th className="text-muted">Transaction charges</th>
                    <td>
                      NSE: 0.00035% <br /> BSE: 0.00045%
                    </td>
                    <td>
                      NSE: 0.0311% <br />
                      BSE: 0.001%
                    </td>
                  </tr>
                  <tr>
                    <th className="text-muted">GST</th>
                    <td>
                      18% on (brokerage + SEBI charges + transaction charges)
                    </td>
                    <td>
                      18% on (brokerage + SEBI charges + transaction charges)
                    </td>
                  </tr>
                  <tr>
                    <th className="text-muted">SEBI charges</th>
                    <td>₹10 / crore</td>
                    <td>₹10 / crore</td>
                  </tr>
                  <tr>
                    <th className="text-muted">Stamp charges</th>
                    <td>0.0001% or ₹10 / crore on buy side</td>
                    <td>0.0001% or ₹10 / crore on buy side</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <div className="currency-tab ms-5 me-5 ps-5 pe-5">
              <table>
                <caption className="fs-5 text-center mt-4">
                  <a href="" className="text-decoration-none">
                    Calculate your costs upfront
                  </a>{" "}
                  using our brokerage calculator
                </caption>
                <thead>
                  <tr className="thead">
                    <th></th>
                    <th>Commodity futures</th>
                    <th>Commodity options</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="text-muted">Brokerage</th>
                    <td>0.03% or Rs. 20/executed order whichever is lower</td>
                    <td>₹ 20/executed order</td>
                  </tr>
                  <tr>
                    <th className="text-muted">STT/CTT</th>
                    <td>0.01% on sell side (Non-Agri)</td>
                    <td>0.05% on sell side</td>
                  </tr>
                  <tr>
                    <th className="text-muted">Transaction charges</th>
                    <td>
                      MCX: 0.0021% <br /> NSE: 0.0001%
                    </td>
                    <td>
                      MCX: 0.0418% <br />
                      NSE: 0.001%
                    </td>
                  </tr>
                  <tr>
                    <th className="text-muted">GST</th>
                    <td>
                      18% on (brokerage + SEBI charges + transaction charges)
                    </td>
                    <td>
                      18% on (brokerage + SEBI charges + transaction charges)
                    </td>
                  </tr>
                  <tr>
                    <th className="text-muted">SEBI charges</th>
                    <td>
                      Agri: <br />
                      ₹1 / crore <br />
                      Non-agri: <br />
                      ₹10 / crore
                    </td>
                    <td>₹10 / crore</td>
                  </tr>
                  <tr>
                    <th className="text-muted">Stamp charges</th>
                    <td>0.002% or ₹200 / crore on buy side</td>
                    <td>0.003% or ₹300 / crore on buy side</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CustomTabPanel>
        </Box>
      </div>
    </div>
  );
}
