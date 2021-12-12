import * as React from "react";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import {
  Typography,
  Button,
  Stack,
  TextField,
  withStyles
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
export default function WhiteBoard() {
  const [state_discord, setDiscord] = useState("");
  const [verify_discord, setDiscordVerification] = useState(false);
  const [verify_recaptcha, setRecaptcha] = useState("");
  // const [verify_discord,setDiscordVerification] = useState(false);
  const styles = {
    whiteboard_button: {
      borderRadius: "20px",
      backgroundColor: "black"
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    
  }
  return (
    <>
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

      <div className="step1 row">
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
              <Button
                variant="contained"
                sx={{ backgroundColor: "transparent" }}
              >
                Connect
              </Button>
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
          <div className="row">
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
      </div>
      <hr></hr>
      <div className="step4 row">
        <div className="col-md-3">
          <Typography
            sx={{
              fontSize: ["1rem", "1.2rem", "1.5rem", "2rem"],
              fontFamily: `"poppins", Sans-serif`,
              fontWeight: "800"
            }}
          >
            step4
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
              ref={(r) => setRecaptcha(r)}
            />
          </div>
        </div>
      </div>
            <hr></hr>
      <Button
        style={styles.whiteboard_button}
        sx = {{width:"300px"}}
        onClick={handleSubmit}
        variant="contained"
      >
        Submit
      </Button>
    </>
  );
}
