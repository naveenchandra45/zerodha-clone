import { useState } from "react";
import InfoItem from "./InfoItem";

const infoList = [
  {
    id: 1,
    title: "Account Opening",
    icon: "fa-solid fa-circle-plus",
    links: [
      "Resident individual",
      "Minor",
      "Non Resident Indian (NRI)",
      "Company, Partnership, HUF and LLP",
      "Glossary",
    ],
  },
  {
    id: 2,
    title: "Your Zerodha Account",
    icon: "fa-regular fa-circle-user",
    links: ["Profile", "Settings", "Console"],
  },
  {
    id: 3,
    title: "Kite",
    icon: "fa-regular fa-compass",
    links: ["Trading Terminal", "User Guide"],
  },
  {
    id: 4,
    title: "Funds",
    icon: "fa-solid fa-indian-rupee-sign",
    links: ["Add Funds", "Withdraw"],
  },
  {
    id: 5,
    title: "Console",
    icon: "fa-regular fa-circle-dot",
    links: ["Reports", "Downloads"],
  },
  {
    id: 6,
    title: "Coin",
    icon: "fa-brands fa-bitcoin",
    links: ["Mutual Funds", "Portfolio"],
  },
];

export default function Info() {
  return (
    <>
      <div className="container-sm mt-5">
        <div className="row">
          <div className="col-9">
            {infoList.map((item) => (
              <InfoItem
                key={item.id}
                title={item.title}
                icon={item.icon}
                links={item.links}
              />
            ))}
          </div>
          <div className="col-3">
            <div
              className="p-3 mt-5 lh-lg"
              style={{
                backgroundColor: "#fff4e5",
                borderLeft: "8px solid #ff9100",
              }}
            >
              <ul>
                <li>
                  <a href="">Offer for sale (OFS) – January 2026</a>
                </li>
                <li>
                  <a href="">Current Takeovers and Delisting – January 2026</a>
                </li>
              </ul>
            </div>
            <div className="mt-4 ">
              <table className="border  w-100">
                <thead>
                  <tr style={{ backgroundColor: "#f6f6f6" }}>
                    <th className="border fs-6">Quick links</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border">
                      <a href="" className="text-decoration-none">
                        1. Track account opening
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <a href="" className="text-decoration-none">
                        2. Track segment activation
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <a href="" className="text-decoration-none">
                        3. Intraday margins
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="border">
                      <a href="" className="text-decoration-none">
                        4. Kite user manual
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="" className="text-decoration-none">
                        5. Learn how to create a ticket
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
