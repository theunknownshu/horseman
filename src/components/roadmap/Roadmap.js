import { roadmap_json } from "../../constant/_helper";
import { Typography, Button, Stack, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Roadmap() {
  const navigate = useNavigate();

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
      {/* <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
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
      </Stack> */}
      <div className="mt-5">
        {roadmap_json.map((roadmap, index) => {
          return (
            <div>
              {index === 5 ? (
                <Typography
                  sx={{
                    fontSize: ["10px", "12px", "16px", "20px"],
                    textAlign: ["center", "center"]
                  }}
                >
                  {roadmap.text}
                </Typography>
              ) : (
                <div>
                  {index % 2 === 0 && (
                    <div className="row">
                      <div className="col-sm-6 row">
                        <div className="col-10">
                          <Typography
                            sx={{
                              fontSize: ["10px", "12px", "16px", "20px"],
                              textAlign: ["center", "right"]
                            }}
                          >
                            {roadmap.text}
                          </Typography>
                        </div>
                        <div className="col-2">
                          {/* <img src={roadmap.flag} style={{ width: "100%" }}></img> */}
                          <CardMedia
                            component="img"
                            sx={{ width: ["2rem", "3rem", "3rem", "4rem"] }}
                            image={roadmap.flag}
                            alt="Paella dish"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6"></div>
                    </div>
                  )}

                  {index % 2 === 1 && (
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="col-10"></div>
                        <div className="col-2"> </div>
                      </div>
                      <div className="col-sm-6 row">
                        <div className="col-2">
                          {/* <img src={roadmap.flag} style={{ width: "100%" }}></img> */}
                          <CardMedia
                            component="img"
                            sx={{ width: ["2rem", "3rem", "3rem", "4rem"] }}
                            image={roadmap.flag}
                            alt="Paella dish"
                          />
                        </div>
                        <div className="col-10">
                          <Typography
                            sx={{
                              fontSize: ["10px", "12px", "16px", "20px"],
                              textAlign: ["center", "left"]
                            }}
                          >
                            {roadmap.text}
                          </Typography>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
              <br></br>
            </div>
          );
        })}
      </div>
      <Button
        variant="contained"
        sx={{ borderRadius: "20px", px: 5 }}
        style={{ backgroundColor: "black" }}
        onClick={() => window.open("https://the-horseman-club.gitbook.io/whiteboard", "_blank")}
        //   window.location.href =
        //     "/https://the-horseman-club.gitbook.io/whiteboard/"
        // }
      >
        
        Whiteboard
      </Button>
      {/* <a
        style={{ backgroundColor: "black", borderRadius: "20px", px: 5 }}
        href="/https://the-horseman-club.gitbook.io/whiteboard/"
        target = "_blank"
      >
        Whiteboard
      </a> */}
    </div>
  );
}

export default Roadmap;
