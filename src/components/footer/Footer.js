import "./Footer.css";

import { Stack, Typography, Button } from "@mui/material";
function Footer() {
  return (
    <div className="container mt-5">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="Center"
        textAlign="left"
        spacing={2}
      >
        <Stack direction="column">
          <Typography sx={{ color: "black" }}>
            @2021 THE HORSEMAN CLUB
          </Typography>
          <Typography sx={{ marginLeft: "4px" }}>Terms of Service</Typography>
        </Stack>
        <Stack direction="row">
          <Button
            variant="contained"
            style={{ backgroundColor: "black" }}
            sx={{
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              padding: "30px",
              fontSize: "30px"
            }}
          >
            <i className="fab fa-discord"></i>
          </Button>
          &nbsp;&nbsp;
          <Button
            variant="contained"
            style={{ backgroundColor: "black" }}
            sx={{
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              padding: "30px",
              fontSize: "30px"
            }}
          >
            <i className="fab fa-twitter"></i>
          </Button>
          &nbsp;&nbsp;
          <Button
            variant="contained"
            style={{ backgroundColor: "black" }}
            sx={{
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              padding: "30px",
              fontSize: "30px"
            }}
          >
            <i className="fab fa-medium"></i>
          </Button>
          {/* <button
            className="btn btn-dark"
            style={{
              borderRadius: "50%",
              padding: "4px 10px",
              fontSize: "25px",
              backgroundColor: "#000"
            }}
          >
            <i className="fab fa-discord"></i>
          </button>
          <button
            className="btn btn-dark"
            style={{
              borderRadius: "50%",
              padding: "4px 8px",
              fontSize: "25px",
              backgroundColor: "#000"
            }}
          >
            <i className="fab fa-twitter"></i>
          </button>
          <button
            className="btn btn-dark"
            style={{
              borderRadius: "50%",
              padding: "4px 12px",
              fontSize: "25px",
              backgroundColor: "#000"
            }}
          >
            <i className="fab fa-medium"></i>
          </button> */}
        </Stack>
      </Stack>
    </div>
  );
}

export default Footer;
