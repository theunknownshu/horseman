import { roadmap_json } from "../../constant/_helper";
import { Typography, Button, Stack, CardMedia } from "@mui/material";
import img_roadmap from "../../assets/images/roadmap_diagram.png";
import "./Horsemap.css";
import { useNavigate } from "react-router-dom";
import { global_styles } from "../../constant/_helper";
function Horsemap() {
  const navigate = useNavigate();
  return (
    <div id="id_roadmap" className="container pt-5">
      <Typography variant="h3" sx={global_styles.headerstyle}>
        HORSEMAP
      </Typography>
      <div className="container mt-5">
        <div className="row mt-3" id="id-roadmap-responsive">
          {roadmap_json.map((roadmap, index) => {
            return (
              index < 5 && (
                <div>
                  <Typography
                    align="center"
                    sx={global_styles.horsemap_content_responsive}
                  >
                    {roadmap.text}
                  </Typography>
                  <br></br>
                </div>
              )
            );
          })}
        </div>
      </div>
      <div className="row mt-3" id="id-non-roadmap-responsive">
        <div className="col-md-5">
          <div className="left-roadmap">
            <Typography
              align="right"
              sx={global_styles.horsemap_content_responsive}
            >
              {roadmap_json[0].text}
            </Typography>

            <Typography
              align="right"
              sx={global_styles.horsemap_content_responsive}
              className="left-roadmap-second-section"
            >
              {roadmap_json[2].text}
            </Typography>

            <Typography
              align="right"
              sx={global_styles.horsemap_content_responsive}
              className="left-roadmap-third-section"
            >
              {roadmap_json[4].text}
            </Typography>
          </div>
        </div>
        <div className="col-md-2" id="id-roadmap-diagram">
          <img
            src={img_roadmap}
            style={{ width: "100%" }}
            className="img-roadmap-size"
          ></img>
        </div>
        <div className="col-md-5">
          <div className="right-roadmap">
            <Typography
              align="left"
              sx={global_styles.horsemap_content_responsive}
            >
              {roadmap_json[1].text}
            </Typography>

            <Typography
              align="left"
              sx={global_styles.horsemap_content_responsive}
              className="right-roadmap-second-section"
            >
              {roadmap_json[3].text}
            </Typography>
          </div>
        </div>
      </div>
      <br />
      <div className="row">
        <Typography
          align="center"
          sx={global_styles.horsemap_content_responsive}
        >
          {roadmap_json[5].text}
        </Typography>
      </div>
      <Button
        variant="contained"
        className="mt-5"
        onClick={() =>
          window.open(
            "https://the-horseman-club.gitbook.io/whiteboard",
            "_blank"
          )
        }
        sx={{ borderRadius: "20px", px: 5 }}
        style={{ backgroundColor: "black" }}
      >
        <Typography
          sx={{ fontFamily: `"Montserrat", Sans-serif`, fontWeight: "bold" }}
        >
          Whiteboard
        </Typography>
      </Button>
    </div>
  );
}

export default Horsemap;
