import "./Introduce.css";
import { Typography, Button } from "@mui/material";
import { introduce_json } from "../../constant/_helper";

function Introduce() {
  return (
    <div className="container">
      
      <Typography
        variant="h3"
        sx={{ fontSize: ["1.5rem", "2rem", "3rem", "3rem"] }}
      >
        {introduce_json.title}
      </Typography>
      <Typography
        sx={{ fontSize: ["10px", "12px", "16px", "20px"] }}
        // dangerouslySetInnerHTML={{ __html: '<p>introduce_json.<br>content</p>' }}
      >
        {introduce_json.content1}
      </Typography>
      <br></br>
      <Typography
        sx={{ fontSize: ["10px", "12px", "16px", "20px"] }}
        // dangerouslySetInnerHTML={{ __html: '<p>introduce_json.<br>content</p>' }}
      >
        {introduce_json.content2}
      </Typography>
      <br></br>
      <Typography
        sx={{ fontSize: ["10px", "12px", "16px", "20px"] }}
        // dangerouslySetInnerHTML={{ __html: '<p>introduce_json.<br>content</p>' }}
      >
        {introduce_json.content3}
      </Typography>

      <Button variant="contained" sx={{ borderRadius: "20px", px: 5 }}>
        White Paper
      </Button>
      <br></br>
      <br></br>
      <div>
        <Button variant="contained" sx={{ borderRadius: "20px" }}>
          <i className="fab fa-discord"></i>
        </Button>
        &nbsp;&nbsp;
        <Button variant="contained" sx={{ borderRadius: "20px" }}>
          <i className="fab fa-twitter"></i>
        </Button>
      </div>
    </div>
  );
}

export default Introduce;
