import { Typography, Button } from "@mui/material";
import { terms_condition_json } from "../../constant/_helper";
import { useNavigate } from "react-router-dom";

function TermsCondition() {
  const navigate = useNavigate();

  const styles = {
    backbutton: {
      borderRadius: "20px",
      backgroundColor: "black"
    }
  };
  return (
    <div className="container mt-5">
      <Typography
        variant="h3"
        sx={{
          fontSize: ["1.5rem", "2rem", "3rem", "3rem"],
          fontFamily: `"Montserrat", Sans-serif`,
          fontWeight: "800"
        }}
      >
        Terms & Conditions
      </Typography>
      <Typography
        sx={{ fontSize: ["10px", "12px", "16px", "20px"] }}
        className="mt-5"
      >
        {terms_condition_json.content}
      </Typography>
      <div className="row d-flex justify-content-center mt-5">
        <Button
          style={styles.backbutton}
          variant="contained"
          onClick={() => navigate("/")}

          // disabled
        >
          back
        </Button>
      </div>
      <br></br>
    </div>
  );
}

export default TermsCondition;
