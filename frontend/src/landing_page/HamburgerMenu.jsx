import * as React from "react";
import { useState, useContext } from "react";
import { Menu, MenuItem, Tooltip, Box, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { AuthContext } from "../authorization/AuthContext";

export default function HamburgerMenu() {
  const { isAuthenticated} = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const appList = [
    {
      name: "Trading Dashboard",
      logo: "media/logo/LogoKite.svg",
      url: "http://localhost:8000/",
      desc: "Trading platform",
    },
    {
      name: "Console",
      logo: "media/logo/LogoConsole.svg",
      url: "https://console.zerodha.com",
      desc: "Backoffice",
    },
    {
      name: "Kite-Connect",
      logo: "media/logo/LogoKiteConnect.svg",
      url: "https://coin.zerodha.com",
      desc: "Trading APIs",
    },
  ];

  return (
    <>
      {isAuthenticated && (
        <div>
          <Tooltip title="Zerodha Products">
            <MenuIcon onClick={handleClick} style={{ cursor: "pointer" }} />
          </Tooltip>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            slotProps={{
              paper: {
                elevation: 3,
                sx: {
                  mt: 1.5,
                  width: "450px",
                  height: "250px",
                  padding: "20px",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                },
              },
            }}
          >
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 1,
              }}
            >
              {appList.map((app) => (
                <MenuItem
                  key={app.name}
                  component="a"
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleClose}
                  sx={{
                    flexDirection: "column",
                    alignItems: "center",
                    padding: "15px 10px",
                    borderRadius: "8px",
                  }}
                >
                  <img
                    src={app.logo}
                    alt={app.name}
                    style={{ width: "30px", marginBottom: "8px" }}
                  />
                  <Typography
                    variant="caption"
                    sx={{ fontWeight: "bold", textAlign: "center" }}
                  >
                    {app.name}
                  </Typography>
                </MenuItem>
              ))}
            </Box>
          </Menu>
        </div>
      )}
    </>
  );
}
