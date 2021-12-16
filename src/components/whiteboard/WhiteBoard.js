import * as React from "react";
import { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";
import { Typography, Button, TextField, Snackbar } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { connectWallet } from "../../util/interact.js";
import MuiAlert from "@mui/material/Alert";
import axios from "axios";
import { whiteboard_alerts_json } from "../../constant/_helper";

require("dotenv").config();

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={3} ref={ref} variant="filled" {...props} />;
});

export default function WhiteBoard(props) {
  /*
   ***************************************  States ********************************************
   */
  const [open, setOpen] = React.useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [state_discord, setDiscord] = useState("");
  const [verify_discord, setDiscordVerification] = useState(false);
  const [verify_discord_button_text, setVerifyDiscordText] = useState("Verify");
  const [verify_recaptcha, setRecaptcha] = useState(null);
  const [errors, setErrors] = useState();
  const [errorMessage, setErrorMessage] = useState("Error");
  const [sub_but, setSubbut] = useState(false);
  const [alert_type, setAlertType] = useState(0);
  const [alert_content, setAlertContent] = useState("");
  const navigate = useNavigate();
  const styles = {
    whiteboard_button: {
      borderRadius: "20px",
      backgroundColor: "black"
    }
  };

  useEffect(() => {
    setWalletAddress(props.walletAddress);
  }, []);
  useEffect(() => {
    if (verify_recaptcha !== null && verify_discord === true) {
      setSubbut(true);
    } else setSubbut(false);
  }, [verify_recaptcha]);

  function handleSubmit(e) {
    e.preventDefault();
    // if (
    //   verify_discord === true &&
    //   verify_recaptcha === true &&
    //   walletAddress !== ""
    // )
    {
      const article = {
        address: walletAddress,
        discordUserName: state_discord
      };
      console.log(process.env.REACT_APP_BASE_API_URL + "signupwaitlist");
      axios
        .post(process.env.REACT_APP_BASE_API_URL + "signupwaitlist", article)
        .then((response) => {
          console.log("response=>", response);
          if (response.data.success === true) {
            setOpen(true);
            setAlertType(1);
            setAlertContent(
              "Congratulations! You just added to whitelist on HorsemanClub!"
            );
          } else {
            setOpen(true);
            setAlertType(0);
            setAlertContent(response.data.msg);
          }
        });
    }
    // setOpen(true);
    // setAlertType(0);
    // setAlertContent("Sorry!Cannot join Whitelist right now. It will be opened in a day!");
  }
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  /**
   *  Press verify button. check verify discord button */

  const handleVerifyDiscord = () => {
    console.log(process.env.REACT_APP_BASE_API_URL);
    const article = {
      discordUserName: state_discord
    };
    axios
      .post(process.env.REACT_APP_BASE_API_URL + "discordVerify", article)
      .then((response) => {
        console.log("response=>", response);
        if (response.data.success === true) {
          setOpen(true);
          setAlertType(1);
          setAlertContent(
            "We confirmed you are in our discord channel"
          );
          setVerifyDiscordText("Verified");
          setDiscordVerification(true);
        } else {
          setOpen(true);
          setAlertType(0);
          setAlertContent(response.data.msg);
          setVerifyDiscordText("Verify");
          setDiscordVerification(false);
        }
      });
    // console.log()
  };
  /**
   *  Press connect button so that can connect to metamask */
  async function handleConnect(e) {
    e.preventDefault();
    const walletResponse = await connectWallet();
    setWalletAddress(walletResponse.address);
  }

  return (
    <div className="mt-5 container">
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
        {/* {alert_type === 0 && alert_type === 2 && (
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            {whiteboard_alerts_json[alert_type]}
          </Alert>
        )}
        {alert_type === 1 && alert_type === 3 && alert_type === 4 && (
          <Alert
            onClose={handleClose}
            severity="warning"
            sx={{ width: "100%" }}
          >
            {whiteboard_alerts_json[alert_type]}
          </Alert>
        )} */}
      </Snackbar>
      <Typography
        variant="h3"
        sx={{
          fontSize: ["1.5rem", "2rem", "3rem", "3rem"],
          fontFamily: `"Montserrat", Sans-serif`,
          fontWeight: "800"
        }}
      >
        How to Join Whitelist
      </Typography>

      <div className="step1 row mt-5">
        <div className="col-md-3">
          <Typography
            sx={{
              fontSize: ["1rem", "1.2rem", "1.5rem", "2rem"],
              fontFamily: `"poppins", Sans-serif`,
              fontWeight: "800"
            }}
          >
            step1
          </Typography>
        </div>
        <div className="col-md-9">
          <div className="row">
            <div className="col-sm-9">
              <Typography
                sx={{
                  fontSize: ["0.8rem", "1rem", "1.2rem", "1.5rem"],
                  fontFamily: `"poppins", Sans-serif`
                  // fontWeight: "800"
                }}
              >
                Connect to Metamask
              </Typography>
            </div>
            <div className="col-sm-3">
              {walletAddress !== "" ? (
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "transparent" }}
                >
                  {walletAddress.length > 0 ? (
                    String(walletAddress).substring(0, 6) +
                    "..." +
                    String(walletAddress).substring(38)
                  ) : (
                    <span>Connect</span>
                  )}
                </Button>
              ) : (
                <Button
                  variant="contained"
                  sx={{ backgroundColor: "transparent" }}
                  onClick={handleConnect}
                >
                  Connect
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="step2 row">
        <div className="col-md-3">
          <Typography
            sx={{
              fontSize: ["1rem", "1.2rem", "1.5rem", "2rem"],
              fontFamily: `"poppins", Sans-serif`,
              fontWeight: "800"
            }}
          >
            step2
          </Typography>
        </div>
        <div className="col-md-9">
          <Typography
            sx={{
              fontSize: ["0.8rem", "1rem", "1.2rem", "1.5rem"],
              fontFamily: `"poppins", Sans-serif`
              // fontWeight: "800"
            }}
          >
            Join our Discord channel. Become a community member for platform
            updates, giveaways and much more! Find your Discord ID through
            account options (on PC) or use the profile button (on mobile). Your
            ID must include the # and numbers included.
          </Typography>
          <div className="row mt-2">
            <div className="col-sm-6">
              <Typography
                sx={{
                  fontSize: ["0.8rem", "1rem", "1.2rem", "1.5rem"],
                  fontFamily: `"poppins", Sans-serif`
                  // fontWeight: "800"
                }}
                className="text-light"
              >
                https://discord.gg/g5D425QyWs
              </Typography>
            </div>
            <div className="col-sm-6">
              <Button
                style={styles.whiteboard_button}
                onClick={() =>
                  window.open("https://discord.gg/g5D425QyWs", "_blank")
                }
                variant="contained"
              >
                Join Discord
              </Button>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-sm-6">
              <TextField
                id="standard-basic"
                label="Please insert your discordID"
                variant="standard"
                // style = {styles.CssTextField}
                sx={{ width: "80%" }}
                onChange={(e) => setDiscord(e.target.value)}
              />
            </div>
            <div className="col-sm-6">
              <Button
                style={styles.whiteboard_button}
                onClick={handleVerifyDiscord}
                variant="contained"
              >
                {verify_discord_button_text}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <hr></hr>

      {/* <div className="step3 row">
        <div className="col-md-3">
          <Typography
            sx={{
              fontSize: ["1rem", "1.2rem", "1.5rem", "2rem"],
              fontFamily: `"poppins", Sans-serif`,
              fontWeight: "800"
            }}
          >
            step3
          </Typography>
        </div>
        <div className="col-md-9">
          <Typography
            sx={{
              fontSize: ["0.8rem", "1rem", "1.2rem", "1.5rem"],
              fontFamily: `"poppins", Sans-serif`
              // fontWeight: "800"
            }}
          >
            EMAIL ADDRESS FOR NOTIFICATIONS OR NEWSLETTERS, ETC.
          </Typography>
          <div className="mt-3">
            <TextField
              id="standard-basic"
              label="Please insert your EmailAddress"
              variant="standard"
              // style = {styles.CssTextField}
              sx={{ width: "80%" }}
              onChange={(e) => setDiscord(e.target.value)}
            />
          </div>
        </div>
      </div> */}
      {/* <hr></hr> */}
      <div className="step3 row">
        <div className="col-md-3">
          <Typography
            sx={{
              fontSize: ["1rem", "1.2rem", "1.5rem", "2rem"],
              fontFamily: `"poppins", Sans-serif`,
              fontWeight: "800"
            }}
          >
            step3
          </Typography>
        </div>
        <div className="col-md-9">
          <Typography
            sx={{
              fontSize: ["0.8rem", "1rem", "1.2rem", "1.5rem"],
              fontFamily: `"poppins", Sans-serif`
              // fontWeight: "800"
            }}
          >
            GOOGLE RECAPTCHA VERIFICATION.
          </Typography>
          <div className="d-flex text-align-center justify-content-center mt-3">
            <ReCAPTCHA
              sitekey="6LcXm5kdAAAAAEh3rCfkiVBQBhUl87gp-htgLJ9t"
              // ref={(r) => setRecaptcha(r)}
              onChange={(token) => {
                setRecaptcha(token);
                let copyErrors = { ...errors };
                if (token) {
                  copyErrors.captcha = undefined;
                } else {
                  copyErrors.captcha = "";
                }
                setErrors(copyErrors);
              }}
              onErrored={(e) => {
                let copyErrors = { ...errors };
                copyErrors.captcha = "";
                setErrors(copyErrors);
              }}
            />
          </div>
        </div>
      </div>
      <hr></hr>
      <div
        className="d-flex justify-content-center"
        style={{ position: "relative" }}
      >
        {sub_but === true ? (
          <Button
            style={styles.whiteboard_button}
            sx={{ width: "300px" }}
            onClick={handleSubmit}
            variant="contained"
          >
            Submit
          </Button>
        ) : (
          <Button
            // style={styles.whiteboard_button}
            sx={{ width: "50%" }}
            variant="contained"
            onClick={handleSubmit}
            disabled
          >
            Submit
          </Button>
        )}

        <Button
          style={styles.whiteboard_button}
          sx={{ position: "absolute", right: "10px" }}
          variant="contained"
          onClick={() => navigate("/")}
        >
          back
        </Button>
      </div>
    </div>
  );
}
