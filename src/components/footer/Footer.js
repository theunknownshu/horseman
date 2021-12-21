import "./Footer.css";

import { Stack, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="container mt-5">
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="Center"
        textAlign="left"
        spacing={2}
      >
        <Stack direction="column">
          <Typography sx={{ fontSize: ["0.7rem", "0.9rem", "1rem", "1.2rem"] }}>
            @2021 THE HORSEMAN CLUB
            <br></br>
            All rights Reserved
          </Typography>
        </Stack>
        <Stack direction="row">
          <Button
            variant="contained"
            style={{ backgroundColor: "black" }}
            onClick={() => window.open("https://discord.gg/g5D425QyWs", "_blank")}
            sx={{
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              padding: "30px",
              fontSize: "30px"
            }}
          >
            <img
              src="https://assets.website-files.com/61211faffaafcac4231a603c/61211faffaafca5d3a1a608b_Discord%20-%20Negative.svg"
              loading="lazy"
              alt=""
            />
          </Button>
          &nbsp;&nbsp;
          <Button
            variant="contained"
            onClick={() =>
              window.open("https://twitter.com/HorsemanClubNFT", "_blank")
            }
            style={{ backgroundColor: "black" }}
            sx={{
              borderRadius: "50%",
              width: "50px",
              height: "50px",
              padding: "30px",
              fontSize: "30px"
            }}
          >
            <img
              src="https://assets.website-files.com/61211faffaafcac4231a603c/61211faffaafcac62e1a608d_Twitter%20-%20Negative.svg"
              loading="lazy"
              alt=""
            />
          </Button>
          {/* &nbsp;&nbsp; */}
          {/* <Button
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
          </Button> */}
        </Stack>
        <Stack>
          <Link className="text-light" to="/terms">
            Terms & Conditions
          </Link>
        </Stack>
      </Stack>
    </div>
  );
}

export default Footer;
