import React from "react";
import Carousel from "react-material-ui-carousel";
import img_intro from "../../assets/images/img_intro.jpg";

import { Grid, Paper, Button } from "@mui/material";
import { carousel_baseURL, carousel_imagename } from "../../constant/_helper";
function Example(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!"
    },
    {
      name: "Random Name #2",
      description: "Hello World!"
    }
  ];

  return (
    <div className = "mt-1">
      <img className="img-fluid" src={img_intro} />
      <Carousel>
        {carousel_imagename.map((item, i) => (
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Item key={i} item={item} />
            </Grid>
          </Grid>
        ))}
      </Carousel>
    </div>
  );
}

function Item(props) {
  return (
    // <Paper>
    //     <h2>{props.item.name}</h2>
    //     <p>{props.item.description}</p>
    //     {/* <img> */}
    //     <Button className="CheckButton">
    //         Check it out!
    //     </Button>
    // </Paper>
    <div>
      <img src={carousel_baseURL + props.item} style={{ width: "250px" }}></img>
    </div>
  );
}
export default Example;
