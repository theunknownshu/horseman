import * as React from "react";
import { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";

import { Typography, Button, TextField } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import {
  connectWallet,
} from "../../util/interact.js";

export default function WhiteBoard(props) {
  const navigate = useNavigate();
  const [walletAddress, setWalletAddress] = useState("");
  const [state_discord, setDiscord] = useState("");
  const [verify_discord, setDiscordVerification] = useState(false);
  const [verify_recaptcha, setRecaptcha] = useState(null);
  const [errors, setErrors] = useState();
  const [sub_but, setSubbut] = useState(false);
  // const [verify_discord,setDiscordVerification] = useState(false);
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
    if (verify_recaptcha !== null) {
      console.log("subasldfkj;alsdf", sub_but);
      setSubbut(true);
    } else setSubbut(false);
    console.log("effect->verify_recaptcha==", verify_recaptcha);
  }, [verify_recaptcha]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  /**
   *  Press connect button so that can connect to metamask */
  async function handleConnect(e) {
    e.preventDefault();
    const walletResponse = await connectWallet();
    setWalletAddress(walletResponse.address);
  }

  return (
    <div className="mt-5 container">
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
                https://discord.gg/Fx4HeMGx
              </Typography>
            </div>
            <div className="col-sm-6">
              <Button
                style={styles.whiteboard_button}
                onClick={() =>
                  (window.location.href = "https://discord.gg/Fx4HeMGx")
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
                onClick={() => console.log(state_discord)}
                variant="contained"
              >
                verify
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
            // disabled
          >
            Submit
          </Button>
        ) : (
          <Button
            // style={styles.whiteboard_button}
            sx={{ width: "50%" }}
            onClick={handleSubmit}
            variant="contained"
            disabled
          >
            Submit
          </Button>
        )}

        <Button
          style={styles.whiteboard_button}
          sx={{ position: "absolute", right: "10px" }}
          onClick={handleSubmit}
          variant="contained"
          onClick={() => navigate("/")}

          // disabled
        >
          back
        </Button>
      </div>
    </div>
  );
}
