import {
  Typography,
  Stack,
  CardActions,
  CardContent,
  Card,
  CardMedia,
  Button,
  Grid
} from "@mui/material";
import { team_json } from "../../constant/_helper";
// import developer from "../../assets/images/team/developer.JPG";
function Team() {
  return (
    <div className="container">
      <Typography
        variant="h3"
        sx={{ fontSize: ["1.5rem", "2rem", "3rem", "3rem"] }}
      >
        TEAM
      </Typography>
      <Grid container spacing={2}>
        {team_json.map((team, index) => {
          return (
            <Grid item xs={4}>
              <Card sx = {{borderRadius: "20px",padding:"10px"}}>
                <CardMedia
                  component="img"
                //   height="50"
                  image={team.avatar}
                  alt="green iguana"
                  sx={{ borderRadius: "10%" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Oliver Bounty
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Developer
                  </Typography>
                </CardContent>
                {/* <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions> */}
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Team;
