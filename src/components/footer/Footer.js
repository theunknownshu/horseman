import "./Footer.css";

import { Stack, Typography, Button } from "@mui/material";
function Footer() {
  return (
    <div className="myfooter">
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="Center"
        textAlign = "left"
        spacing={2}
      >
          Terms of Service
      </Stack>
    </div>
  );
}

export default Footer;
