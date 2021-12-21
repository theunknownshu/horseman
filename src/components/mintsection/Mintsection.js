import "./Mintsection.css";
import { Typography, TextField, Button, Snackbar } from "@mui/material";
import img_mint from "../../assets/images/img_mintsection.png";
import { global_styles } from "../../constant/_helper";
import { mintHorseCount } from "../../util/interact";
import { useEffect, useState } from "react";
import axios from "axios";
import * as React from "react";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={3} ref={ref} variant="filled" {...props} />;
});
function Mintsection(props) {
  const [mintCount, setMintingCount] = useState(1);
  const [confirmMinted, setConfirmMinted] = useState("");
  const [nftPrice, setNftPrice] = useState(0.04);
  const [open, setOpen] = useState(false);
  const [alert_type, setAlertType] = useState(0);
  const [alert_content, setAlertContent] = useState("");

  function handleOnMintButtonClick() {
    const walletAddress = props.walletAddress;
    console.log("buttonclick", walletAddress);
    console.log("mintcount", mintCount);

    const getMintData = {
      address: walletAddress,
      count: mintCount
    };

    axios
      .post(process.env.REACT_APP_BASE_API_URL + "getMintData", getMintData)
      .then(async (response) => {
        // console.log("response=>", response);
        if (response.data.success === true) {
          setNftPrice(response.data.price);
          setOpen(true);
          setAlertType(1);
          setAlertContent("You can successfuly mint our HorsemanNFT!");
          const result = await mintHorseCount(
            walletAddress,
            mintCount,
            response.data.price
          );
          console.log("result->status",result.status);
          if (result.success === true) setConfirmMinted(result.status);
          // window.alert(result.status);
        } else {
          setOpen(true);
          setAlertType(0);
          setAlertContent(response.data.message);
        }
      });
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <div className="container pt-5">
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        {alert_type === 0 ? (
          <Alert
            onClose={handleClose}
            severity="warning"
            sx={{ width: "100%" }}
          >
            {alert_content}
          </Alert>
        ) : (
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            {alert_content}
          </Alert>
        )}
      </Snackbar>
      <Typography variant="h3" sx={global_styles.headerstyle}>
        MINT
      </Typography>

      {/* {props.checkMintable === false ? (
        <div
          className="btn-round my-card-container row p-5 mt-5"
          style={{ maxWidth: "650px" }}
        >
          <Typography
            sx={{
              fontSize: ["1rem", "1rem", "1.2rem", "1.2rem"],
              fontFamily: `"Montserrat", Sans-serif`,
              fontWeight: "bold"
            }}
          >
            You can not mint. Please join our Whitelist first!
          </Typography>
        </div>
      ) : ( */}
      <div className="btn-round my-card-container row p-5 mt-5">
        <div
          className="col-sm-6 d-flex justify-content-center"
          style={{ padding: 0 }}
        >
          <img src={img_mint} style={{ width: "100%", padding: "10px" }}></img>
        </div>
        <div className="col-sm-6 content-style">
          <Typography
            sx={{
              fontSize: ["1rem", "1rem", "1.2rem", "1.2rem"],
              fontFamily: `"Montserrat", Sans-serif`,
              fontWeight: "bold"
            }}
          >
            Mint is not available yet.
          </Typography>

          {/* <Button
            className="btn-round py-2"
            variant="contained "
            onClick={handleOnMintButtonClick}
            style={{
              color: "black",
              backgroundColor: "white",
              borderRadius: "30px"
            }}
          >
            Mint
          </Button>

          <TextField
            id="standard-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true
            }}
            sx={{ backgroundColor: "white" }}
            variant="filled"
            onChange={(e) => setMintingCount(e.target.value)}
          /> */}

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
      {/* )} */}
    </div>
  );
}

export default Mintsection;
