import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import PinDropIcon from "@mui/icons-material/PinDrop";
import Divider from "@mui/material/Divider";


function Support({ setView }) {
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
        <Box sx={{ textAlign: "center", lineHeight: 3 }}>
          <Typography variant="h5">
            <CallIcon sx={{ fontSize: 40 }} /> 88106XXXXX
          </Typography>
          <Divider />
          <Typography variant="h6">
            <EmailIcon sx={{ fontSize: 40 }} /> xyz@gmail.com
          </Typography>
          <Divider />
          <Typography variant="subtitle1">
            <PinDropIcon sx={{ fontSize: 40 }} /> <br />
            42 Lalbagh Road Street 9, Shanthi Road <br /> Karnataka <br />{" "}
            Bengaluru 560027
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Support;
