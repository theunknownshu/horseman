import { roadmap_json } from "../../constant/_helper";
import { Typography, Stack, CardMedia } from "@mui/material";
function Roadmap() {
  return (
    <div className="container">
      <Typography
        variant="h3"
        sx={{ fontSize: ["1.5rem", "2rem", "3rem", "3rem"] }}
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
  );
}

export default Roadmap;
