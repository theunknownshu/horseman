import {roadmap_json} from "../../constant/_helper";
import { Typography } from "@mui/material";
function Roadmap() {
  return (
    <div className = "container">
      <Typography variant="h3" sx = {{fontSize:['1.5rem','2rem','3rem','3rem']}}>HORSEMAP</Typography>
      {roadmap_json.map((roadmap, index) => {
        return (
          <div key={index}>
            <p>{roadmap.percent}</p>
            <p>{roadmap.text}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Roadmap;
