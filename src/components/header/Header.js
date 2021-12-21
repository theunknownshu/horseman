import "./Header.css";
import logo from "../../assets/images/logo.png";

import { Button, IconButton, Stack } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useNavigate, Link } from "react-router-dom";
import { global_styles } from "../../constant/_helper";
function Header() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="myheader">
        <nav
          className="navbar navbar-expand-md navbar-light  row"
          style={{ margin: "0", padding: "0" }}
        >
          <div className="col-md-3 ">
            <img
              src={logo}
              alt="logo image"
              className="rounded-circle logo-image"
            />
            {/* <h2 className="navbar-brand my-logo" href="#">
            The Horseman Club
          </h2> */}
          </div>

          <div className="col-md-6 col-sm-6">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarTogglerDemo01"
            >
              <ul
                className="navbar-nav"
                style={{
                  width: "100%",
                  justifyContent: "space-around",
                  fontFamily: `"Montserrat", Sans-serif`,
                  fontWeight: "800",
                  color: "black"
                }}
              >
                <li className="nav-item ">
                  <a className="nav-link" href="#id_introduce">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <div className="dropdown">
                    <button
                      className="btn  dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Project
                    </button>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      {/* <a className="dropdown-item" href="#">
                      Whitelist
                    </a> */}
                      <Link className="dropdown-item" to="/whitelist">
                        WhiteList
                      </Link>
                      <a
                        className="dropdown-item"
                        href="https://the-horseman-club.gitbook.io/whiteboard/"
                        target="_blank"
                      >
                        Whiteboard
                      </a>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#id_roadmap">
                    Roadmap
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#id_faq">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#id_team">
                    Team
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            {/* <button
            type="button"
            class="btn btn-dark round btn-discord rounded-pill"
          >
            Join Discord
          </button>
          &nbsp; */}
            <Button
              style={global_styles.header_discord_button_style}
              onClick={() =>
                window.open("https://discord.gg/g5D425QyWs", "_blank")
              }
              variant="contained"
            >
              Join Discord
            </Button>
            {/* <Button
            variant="contained"
            style={{ backgroundColor: "black" }}
            sx={{ borderRadius: "20px" }}
          >
            {" "}
            <i className="	fab fa-twitter"></i>
          </Button> */}
            &nbsp;
            <IconButton
              style={{
                backgroundColor: "black",
                padding: "8px",
                color: "white"
              }}
              aria-label="delete"
              onClick={() =>
                window.open("https://twitter.com/HorsemanClubNFT", "_blank")
              }
              size="small"
            >
              <TwitterIcon fontSize="inherit" />
            </IconButton>
            {/* <button
            type="button"
            class="btn btn-dark btn-twitter"
          >
            <i className = 	"	fab fa-twitter"></i>
          </button> */}
          </div>
        </nav>
      </div>
      <div className="mymobileheader">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Stack sx={{ display: "inline-block" }}>
            <img
              src={logo}
              alt="logo image"
              className="rounded-circle logo-image"
            />
            <span
              style={{
                fontFamily: `"Montserrat", Sans-serif`,
                fontWeight: "800",
                color: "black"
              }}
              className="text-dark"
            >
              &nbsp;The Horseman Club
            </span>
          </Stack>
          <Stack className="navbar-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </Stack>
        </Stack>
        <div>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarTogglerDemo02"
          >
            <ul
              className="navbar-nav"
              style={{
                width: "100%",
                justifyContent: "space-around",
                fontFamily: `"Montserrat", Sans-serif`,
                fontWeight: "800",
                color: "black"
              }}
            >
              <li className="nav-item ">
                <a className="nav-link" href="#id_introduce">
                  About
                </a>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <button
                    className="btn  dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Project
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    {/* <a className="dropdown-item" href="#">
                      Whitelist
                    </a> */}
                    <Link className="dropdown-item" to="/whitelist">
                      WhiteList
                    </Link>
                    <a
                      className="dropdown-item"
                      href="https://the-horseman-club.gitbook.io/whiteboard/"
                      target="_blank"
                    >
                      Whiteboard
                    </a>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#id_roadmap">
                  Roadmap
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#id_faq">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#id_team">
                  Team
                </a>
              </li>

              <li className="nav-item">
                <Button
                  style={global_styles.header_discord_button_style}
                  onClick={() =>
                    window.open("https://discord.gg/g5D425QyWs", "_blank")
                  }
                  variant="contained"
                >
                  Join Discord
                </Button>
              </li>

              <li className="nav-item">
                <IconButton
                  style={{
                    backgroundColor: "black",
                    padding: "8px",
                    color: "white"
                  }}
                  aria-label="delete"
                  onClick={() =>
                    window.open("https://twitter.com/HorsemanClubNFT", "_blank")
                  }
                  size="small"
                >
                  <TwitterIcon fontSize="inherit" />
                </IconButton>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
