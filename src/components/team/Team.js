import { Typography } from "@mui/material";
import { team_json } from "../../constant/_helper";
import "./Team.css";
import { global_styles } from "../../constant/_helper";

function Team() {
  return (
    <div id="id_team" className="container pt-5">
      <Typography variant="h3" sx={global_styles.headerstyle}>
        TEAM
      </Typography>
      {/* <div className=" container mt-5 row" style = {{margin:0}}>
        {team_json.map((team, index) => {
          return (
            <div className="col-sm-4 team-padding">
              <div className="team-card-container row">
                <div className="col-3 p-2">
                  <img
                    src={team.avatar}
                    className="rounded-circle img-avatar-size"
                    style ={{width:"50px"}}
                  ></img>
                </div>
                <div className="col-9 text-align-center p-2">
                  <Typography sx ={{fontWeight:"800"}}>{team.name}</Typography>
                  <Typography sx= {{fontSize:"12px"}}>{team.role}</Typography>

                </div>
              </div>
            </div>
          );
        })}
      </div> */}
      <div className="row mt-2">
        <div className="col-md-6 d-flex">
          <div
            className=" d-flex justify-center"
            style={{ flexDirection: "column", justifyContent: "center" }}
          >
            <Typography sx={{ fontFamily: `"Poppins", Sans-serif` }}>
              The Horseman Club has been created by a group of four friends that
              wanted to join and share their art and love for the blockchain
            </Typography>
            <br></br>
            {team_json.map((team, index) => {
              return (
                <Typography
                  sx={{ fontFamily: `"Poppins", Sans-serif`, fontWeight: 800 }}
                  className="text-dark"
                >
                  {team.name}&nbsp;
                  <span className="text-white">{team.role_describe}</span>
                </Typography>
              );
            })}
          </div>
        </div>
        <div className="col-md-6">
          <div className="row">
            {team_json.map((team, index) => {
              return (
                <div className="col-sm-6 col-md-6 p-4">
                  <img
                    // className="team_img"
                    src={team.avatar}
                    style={{ width: "100%" }}
                    // onClick={() => window.open(`${team.linkedIn}`, "_blank")}
                  ></img>
                  <Typography
                    sx={{
                      fontFamily: `"Poppins", Sans-serif`,
                      fontWeight: 800
                    }}
                    className="text-dark"
                  >
                    {team.name}
                    {/* <span className="text-white">CODE SPEAKER</span> */}
                  </Typography>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
