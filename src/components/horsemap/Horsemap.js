import { roadmap_json } from "../../constant/_helper";
import { Typography, Button, Stack, CardMedia } from "@mui/material";
import img_roadmap from "../../assets/images/roadmap_diagram.png";
import "./Horsemap.css";
function Horsemap() {
  return (
    <div id="id_roadmap" className="container pt-5">
      <Typography
        variant="h3"
        sx={{
          fontSize: ["1.5rem", "2rem", "3rem", "3rem"],
          fontFamily: `"Montserrat", Sans-serif`,
          fontWeight: "800"
        }}
      >
        HORSEMAP
      </Typography>
      <div className="row mt-3">
        <div className="col-md-5">
          <div className="left-roadmap">
            <Typography
              align="right"
              sx={{
                fontSize: ["0.3rem", "", "", "1.2rem"],
                fontFamily: `"Poppins", Sans-serif`
              }}
            >
              {roadmap_json[0].text}
            </Typography>

            <Typography
              align="right"
              sx={{
                fontSize: ["0.3rem", "", "", "1.2rem"],
                fontFamily: `"Poppins", Sans-serif`
              }}
              className="left-roadmap-second-section"
            >
              {roadmap_json[2].text}
            </Typography>
          </div>
        </div>
        <div className="col-md-2">
          <img src={img_roadmap} style={{ width: "100%"}}></img>
        </div>
        <div className="col-md-5">
          <div className="right-roadmap">
            <Typography
              align="left"
              sx={{
                fontSize: ["0.3rem", "", "", "1.2rem"],
                fontFamily: `"Poppins", Sans-serif`
              }}
            >
              {roadmap_json[1].text}
            </Typography>

            <Typography
              align="left"
              sx={{
                fontSize: ["0.3rem", "", "", "1.2rem"],
                fontFamily: `"Poppins", Sans-serif`
              }}
              className="right-roadmap-second-section"
            >
              {roadmap_json[3].text}
            </Typography>
          </div>
        </div>
      </div>
      <br/>
      <div className="row">
        <Typography
          align="center"
          sx={{
            fontSize: ["0.3rem", "", "", "1.2rem"],
            fontFamily: `"Poppins", Sans-serif`
          }}
        >
          {roadmap_json[4].text}
        </Typography>
      </div>
      <br/>
      <Button
        variant="contained"
        sx={{ borderRadius: "20px", px: 5 }}
        style={{ backgroundColor: "black" }}
      >
        Whiteboard
      </Button>
    </div>
  );
}

export default Horsemap;
