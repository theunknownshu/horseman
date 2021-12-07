import { roadmap_json } from "../../constant/_helper";
import { Typography, Stack } from "@mui/material";
function Roadmap() {
  return (
    <div className="container">
      <Typography
        variant="h3"
        sx={{ fontSize: ["1.5rem", "2rem", "3rem", "3rem"] }}
      >
        HORSEMAP
      </Typography>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <Typography
          variant="h3"
          sx={{
            fontSize: ["10px", "12px", "16px", "20px"],
            textAlign: ["center",  "right"]
          }}
        >
          {roadmap_json[0].text}
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontSize: ["10px", "12px", "16px", "20px"],
            textAlign: ["center", "left"]
          }}
        >
          {roadmap_json[1].text}
        </Typography>
      </Stack>
    </div>
  );
}

export default Roadmap;
