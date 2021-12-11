import "./Footer.css";

import { Stack, Typography, Button } from "@mui/material";
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
            <img
              src="https://assets.website-files.com/61211faffaafcac4231a603c/61211faffaafca5d3a1a608b_Discord%20-%20Negative.svg"
              loading="lazy"
              alt=""
            />
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
            <img
              src="https://assets.website-files.com/61211faffaafcac4231a603c/61211faffaafcac62e1a608d_Twitter%20-%20Negative.svg"
              loading="lazy"
              alt=""
            />
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
        </Stack>
      </Stack>
    </div>
  );
}

export default Footer;
