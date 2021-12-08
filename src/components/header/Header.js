import "./Header.css";
import logo from "../../assets/images/logo.png";

import { Button, IconButton } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
function Header() {
  return (
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
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  About <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link dropdown-toggle" href="#">
                  Project
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  Roadmap
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">
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
            sx={{ borderRadius: "20px" }}
            style={{ backgroundColor: "black" }}
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
            style={{ backgroundColor: "black", padding:"8px",color: "white" }}
            aria-label="delete"
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
  );
}

export default Header;
