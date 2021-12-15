import "./introduce.css";
import { Typography, Button } from "@mui/material";
import { introduce_json } from "../../constant/_helper";
import { useNavigate } from "react-router-dom";

function Introduce() {
  const navigate = useNavigate();
  const styles = {
    contentstyle: {
      fontSize: ["1rem", "", "", "20px"],
      fontFamily: `"Poppins", Sans-serif`
    }
  };

  return (
    <div id="id_introduce" className="container pt-5">
      <Typography
        variant="h3"
        sx={{
          fontSize: ["1.5rem", "2rem", "3rem", "3rem"],
          fontFamily: `"Montserrat", Sans-serif`,
          fontWeight: "800"
        }}
      >
        {introduce_json.title}
      </Typography>
      <br />
      <Typography
        style = {styles.contentstyle}
        className="mt-5"
        // dangerouslySetInnerHTML={{ __html: '<p>introduce_json.<br>content</p>' }}
      >
        {introduce_json.content1}
      </Typography>
      <br></br>
      <Typography
       style = {styles.contentstyle}
        // dangerouslySetInnerHTML={{ __html: '<p>introduce_json.<br>content</p>' }}
      >
        {introduce_json.content2}
      </Typography>
      <br></br>
      <Typography
       style = {styles.contentstyle}
        // dangerouslySetInnerHTML={{ __html: '<p>introduce_json.<br>content</p>' }}
      >
        {introduce_json.content3}
      </Typography>

      <br />
      <Button
        variant="contained"
        className="mt-5"
        onClick={() => navigate("/whitelist")}
        sx={{ borderRadius: "40px" }}
        style={{ backgroundColor: "black", padding: "15px 30px" }}
      >
        <Typography
          sx={{ fontFamily: `"Montserrat", Sans-serif`, fontWeight: "bold" }}
        >
          Enter in the whitelist
        </Typography>
      </Button>

      <div className="mt-5">
        {/* <Button
        
          variant="contained"
          style={{ backgroundColor: "black" }}
          sx={{ borderRadius: "20px" }}
        >
          <i className="fab fa-discord"></i>
        </Button>
        &nbsp;&nbsp;
        <Button
          variant="contained"
          style={{ backgroundColor: "black" }}
          sx={{ borderRadius: "20px" }}
        >
          <i className="fab fa-twitter"></i>
        </Button> */}
        <Button
          variant="contained"
          style={{ backgroundColor: "black" }}
          onClick={() => window.open("https://discord.gg/g5D425QyWs", "_blank")}
          sx={{
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            padding: "30px",
            fontSize: "30px"
          }}
        >
          {/* <i className="fab fa-discord"></i> */}
          <img
            src="https://assets.website-files.com/61211faffaafcac4231a603c/61211faffaafca5d3a1a608b_Discord%20-%20Negative.svg"
            loading="lazy"
            alt=""
          />
        </Button>
        &nbsp;&nbsp;
        <Button
          variant="contained"
          onClick={() =>
            window.open("https://twitter.com/HorsemanClubNFT", "_blank")
          }
          style={{ backgroundColor: "black" }}
          sx={{
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            padding: "30px",
            fontSize: "30px"
          }}
        >
          {/* <i className="fab fa-twitter"></i> */}
          <img
            src="https://assets.website-files.com/61211faffaafcac4231a603c/61211faffaafcac62e1a608d_Twitter%20-%20Negative.svg"
            loading="lazy"
            alt=""
          />
        </Button>
      </div>
    </div>
  );
}

export default Introduce;
