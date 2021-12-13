import * as React from "react";
import WhiteBoard from "../whiteboard/WhiteBoard";
import Customcarousel from "../carousel/Carousel";
import "./container.css";
export default function WhiteboardContainer(props) {
  return (
    <div className = "content-section">
      <Customcarousel></Customcarousel>
      {/* <div>{props.walletAddress}</div> */}
      <WhiteBoard walletAddress = {props.walletAddress}></WhiteBoard>
    </div>
  );
}
