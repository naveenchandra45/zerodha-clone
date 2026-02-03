import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import SupportIcon from "@mui/icons-material/Support";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";

import Profile from "./Profile";
import Account from "./Account";
import Support from "./Support";
import Setting from "./Setting";

export default function UserMenu() {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const [view, setView] = useState("main"); //tab you clicked to see details like account
  const [userData, setUserData] = useState({
    _id: "",
    username: "",
    age: "",
    email: "",
  });

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setView("main");
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure to logout?")) {
      try {
        axios.get("https://zerodha-clone-ukx9.onrender.com/logout");

        navigate("/logout");
        window.location.reload();
      } catch (err) {
        const msg = err.response?.data?.message;
        console.log(msg);
      }
    }
  };

  useEffect(() => {
    axios
      .get("https://zerodha-clone-ukx9.onrender.com/fetchUser")
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        const msg = err.response?.data?.message;
        alert(msg);
      });
  }, []);

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="User Menu">
          <IconButton onClick={handleClick} size="small" sx={{ ml: 5 }}>
            <Avatar sx={{ width: 32, height: 32 }}>
              {userData.username
                ? userData.username.charAt(0).toUpperCase()
                : "?"}
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {view === "main" && (
          <Box sx={{ width: 200 }}>
            <MenuItem
              onClick={() => {
                setView("profile");
              }}
            >
              <ListItemIcon>
                <AccountCircleRoundedIcon fontSize="small" />
              </ListItemIcon>
              Profile
            </MenuItem>
            <MenuItem
              onClick={() => {
                setView("account");
              }}
            >
              <ListItemIcon>
                <ManageAccountsRoundedIcon fontSize="small" />
              </ListItemIcon>
              My account
            </MenuItem>
            <MenuItem
              onClick={() => {
                setView("support");
              }}
            >
              <ListItemIcon>
                <SupportIcon fontSize="small" />
              </ListItemIcon>
              Support
            </MenuItem>
            <Divider></Divider>
            <MenuItem
              onClick={() => {
                setView("setting");
              }}
            >
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Box>
        )}

        {view === "profile" && (
          <Profile setView={setView} userData={userData} />
        )}

        {view === "account" && (
          <Account setView={setView} userData={userData} />
        )}

        {view === "support" && <Support setView={setView} />}
        {view === "setting" && <Setting setView={setView} />}
      </Menu>
    </>
  );
}
