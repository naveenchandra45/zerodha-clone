import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Accout({ setView, userData }) {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    id: userData._id,
    username: userData.username,
    age: userData.age,
    email: userData.email,
  });

  const handleInput = (event) => {
    const { name, value } = event.target;
    setUserInfo((currInfo) => {
      return { ...currInfo, [name]: value };
    });
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    if (window.confirm("Are you sure! you want to update")) {
      try {
        const data = await axios.put(
          `http://localhost:8080/update/${userInfo.id}`,
          userInfo,
        );
        alert("Account updated successful!");
        navigate("/");
        window.location.reload();
      } catch (err) {
        const msg = err.response?.data?.message || "Something went wrong";
        alert(msg);
      }
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure? This cannot be undone.")) {
      try {
        await axios.delete(`http://localhost:8080/delete/${userInfo.id}`);
        alert("Account deleted successfully!");
        navigate("/logout");
        window.location.reload();
      } catch (err) {
        const msg = err.response?.data?.message || "Something went wrong";
        alert(msg);
      }
    }
  };

  return (
    <>
      <Box sx={{ minWidth: 300, minHeight: 300, p: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Tooltip title="back" arrow placement="right-end">
            <IconButton size="small" onClick={() => setView("main")}>
              <KeyboardDoubleArrowLeftIcon
                sx={{ color: "red", fontSize: 30 }}
              />
            </IconButton>
          </Tooltip>
        </Box>

        <form>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="username"
              name="username"
              value={userInfo.username}
              onChange={handleInput}
              required
            />
            <label htmlFor="floatingInput">Username</label>
          </div>
          <div className="form-floating mb-4 p-1">
            <input
              type="number"
              className="form-control"
              id="floatingAge"
              placeholder="age"
              min="18"
              max="120"
              name="age"
              value={userInfo.age}
              onChange={handleInput}
              required
            />
            <label htmlFor="floatingAge">Age</label>
          </div>
          <div className="form-floating mb-1 p-1">
            <input
              type="email"
              className="form-control"
              id="floatingEmail"
              placeholder="email"
              name="email"
              value={userInfo.email}
              onChange={handleInput}
              required
            />
            <label htmlFor="floatingEmail">Email</label>
          </div>
          <Button
            variant="outlined"
            sx={{
              color: "purple",
              borderColor: "purple",
              marginRight: 5,
              "&:hover": {
                borderColor: "darkpurple",
                backgroundColor: "rgba(128, 0, 128, 0.05)",
              },
            }}
            onClick={handleUpdate}
          >
            <EditIcon />
            &nbsp; Update
          </Button>
          <Button variant="outlined" color="error" onClick={handleDelete}>
            <DeleteIcon />
            &nbsp; Delete
          </Button>
        </form>
      </Box>
    </>
  );
}

export default Accout;
