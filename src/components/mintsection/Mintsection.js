import "./Mintsection.css";
import { Typography, Button } from "@mui/material";
import img_mint from "../../assets/images/img_mintsection.png";
import { global_styles } from "../../constant/_helper";

function Mintsection() {
  return (
    <div className="container pt-5">
      <Typography variant="h3" sx={global_styles.headerstyle}>
        MINT
      </Typography>
      <div
        className="btn-round my-card-container row p-5 mt-5"
        style={{ maxWidth: "650px" }}
      >
        <div
          className="col-sm-6 d-flex justify-content-center"
          style={{ padding: 0 }}
        >
          <img src={img_mint} style={{ width: "100%", padding: "10px" }}></img>
        </div>
        <div className="col-sm-6">
          <Typography
            sx={{
              fontSize: ["1rem", "1rem", "1.2rem", "1.2rem"],
              fontFamily: `"Montserrat", Sans-serif`,
              fontWeight: "bold"
            }}
          >
            Mint is not available yet.
          </Typography>

          <Typography sx={global_styles.mintsection_text}>
            Presale and Public Sale Dates <b> Will Be Revealed Soon.</b>
          </Typography>

          <Typography sx={global_styles.mintsection_text}>
            Don't Miss Anything & Get Whitelisted!
          </Typography>

          <Button
            className="btn-round py-2"
            variant="contained "
            onClick={() =>
              window.open("https://discord.gg/g5D425QyWs", "_blank")
            }
            style={{
              color: "black",
              backgroundColor: "white",
              borderRadius: "30px"
            }}
          >
            <Typography
              sx={{
                fontFamily: `"Montserrat", Sans-serif`,
                fontWeight: "bold"
              }}
            >
              Join Our Discord
            </Typography>
          </Button>

          <Typography
            sx={{
              fontSize: ["0.8rem", "0.8rem", "1rem", "1rem"],
              fontFamily: `"Montserrat", Sans-serif`
            }}
            className="mt-2"
          >
            <i style={{ color: "gray" }}>Verified Smart Contract</i>
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Mintsection;
