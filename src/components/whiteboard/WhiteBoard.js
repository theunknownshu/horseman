import * as React from "react";
import { Typography, Button, Stack } from "@mui/material";

export default function WhiteBoard() {
  return (
    <>
      <Typography
        variant="h3"
        sx={{
          fontSize: ["1.5rem", "2rem", "3rem", "3rem"],
          fontFamily: `"Montserrat", Sans-serif`,
          fontWeight: "800"
        }}
      >
        How to Join Whitelist
      </Typography>
    </>
  );
}
