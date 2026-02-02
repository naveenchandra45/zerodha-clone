import { blue } from "@mui/material/colors";
import { useState } from "react";

export default function InfoItem({ title, icon, links }) {
  let [isOpen, setIsOpen] = useState(false);

  let toggleButton = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="container mt-5">
      <div className="card border-1 rounded-3 overflow-hidden">
        <div
          className="d-flex align-items-center cursor-pointer"
          onClick={toggleButton}
          role="button"
        >
          <div
            className="d-flex align-items-center justify-content-center border-end"
            style={{
              backgroundColor: "#f8fbff",
              padding: "15px 20px",
              minWidth: "65px",
            }}
          >
            <i className={icon} style={{color: "#3e80d1", fontSize: "1.5rem"}}></i>
          </div>
          <div className="flex-grow-1 ps-3 text-secondary fw-medium fs-5">
            {title}
          </div>
          <div className="pe-3">
            {isOpen ? (
              <i className="fa-solid fa-angle-up" style={{ color: "#3e80d1" }}></i>
            ) : (
              <i
                className="fa-solid fa-angle-down"
                style={{ color: "#3e80d1" }}
              ></i>
            )}
          </div>
        </div>
        {isOpen && (
          <div className="card-body border-top">
            <p className="card-text text-muted">
              <ul className="ps-4 fs-6 fw-semibold">
                {links.map((name, index) => (
                  <li key={index} className="mb-2">
                    <a href="#" className="text-decoration-none text-primary">
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
