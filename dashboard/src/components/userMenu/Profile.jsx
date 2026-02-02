import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

function Profile({ setView, userData }) {
  
  return (
    <>
      <Box sx={{ minWidth: 200, minHeight: 300, p: 2 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Tooltip title="back" arrow placement="right-end">
            <IconButton size="small" onClick={() => setView("main")}>
              <KeyboardDoubleArrowLeftIcon
                sx={{ color: "red", fontSize: 30 }}
              />
            </IconButton>
          </Tooltip>
        </Box>
        <Box sx={{textAlign: "center", lineHeight: 3}}>
          <Typography variant="h5">{userData.username}</Typography>
          <Typography variant="h6">{userData.email}</Typography>
          <Typography variant="subtitle1">Age: {userData.age}</Typography>
        </Box>
      </Box>
    </>
  );
}

export default Profile;
