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
        className="btn-round my-card-container row mt-5"
        style={{ maxWidth: "600px" }}
      >
        <div className="col-sm-6 d-flex justify-content-center" >
          <img src = {img_mint} style = {{width:"80%", padding:"10px"}}></img>
        </div>
        <div className="col-sm-6">
          <p>Mint is not available yet.</p>
          <p>Presale and Public Sale Dates Will Be Revealed Soon.</p>
          <p>Don't Miss Anything & Get Whitelisted!</p>
          <Button className = "btn-round" variant="contained " style={{ color:"black", backgroundColor: "white" }}>
            Join Our Discord
          </Button>
          <br />
          <i>Verified Smart Contract</i>
        </div>
      </div>
    </div>
  );
}

export default Mintsection;
