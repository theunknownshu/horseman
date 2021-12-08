import { Typography } from "@mui/material";
import { team_json } from "../../constant/_helper";
import "./Team.css";
// import developer from "../../assets/images/team/developer.JPG";
function Team() {
  return (
    <div className="container pt-5">
      <Typography
        variant="h3"
        sx={{
          fontSize: ["1.5rem", "2rem", "3rem", "3rem"],
          fontFamily: `"Montserrat", Sans-serif`,
          fontWeight: "800"
        }}
      >
        TEAM
      </Typography>
      <div className=" container mt-5 row" style = {{margin:0}}>
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
      </div>
    </div>
  );
}

export default Team;
