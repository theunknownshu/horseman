import "./Mintsection.css";
import { Typography, Button } from "@mui/material";
import img_mint from "../../assets/images/carousel/375.png";
function Mintsection() {
  return (
    <div className="container pt-5">
      <Typography
        variant="h3"
        sx={{
          fontSize: ["1.5rem", "2rem", "3rem", "3rem"],
          fontFamily: `"Montserrat", Sans-serif`,
          fontWeight: "800"
        }}
      >
        MINT
      </Typography>
      <div
        className="btn-round my-card-container row p-5 mt-5"
        style={{ maxWidth: "600px" }}
      >
        <div className="col-sm-6 d-flex justify-content-center" style = {{padding:0}}>
          <img src={img_mint} style={{ width: "100%", padding: "10px" }}></img>
        </div>
        <div className="col-sm-6">
          <Typography
            sx={{
              fontSize: ["1rem", "1rem", "1.2rem", "1.2rem"],
              fontFamily: `"Montserrat", Sans-serif`
            }}
          >
            Mint is not available yet.
          </Typography>

          <Typography
            sx={{
              fontSize: ["1rem", "1rem", "1.2rem", "1.2rem"],
              fontFamily: `"Montserrat", Sans-serif`
            }}
          >
            Presale and Public Sale Dates <b> Will Be Revealed Soon.</b>
          </Typography>

          <Typography
            sx={{
              fontSize: ["1rem", "1rem", "1.2rem", "1.2rem"],
              fontFamily: `"Montserrat", Sans-serif`
            }}
          >
            Don't Miss Anything & Get Whitelisted!
          </Typography>

          <Button
            className="btn-round"
            variant="contained "
            style={{
              color: "black",
              backgroundColor: "white",
              borderRadius: "30px"
            }}
          >
            Join Our Discord
          </Button>
          <br />
          <Typography
            sx={{
              fontSize: ["1rem", "1rem", "1.2rem", "1.2rem"],
              fontFamily: `"Montserrat", Sans-serif`
            }}
          >
            <i> Don't Miss Anything & Get Whitelisted!</i>
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Mintsection;
