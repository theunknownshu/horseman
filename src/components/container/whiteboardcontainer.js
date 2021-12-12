import * as React from "react";
import WhiteBoard from "../whiteboard/WhiteBoard";
import Customcarousel from "../carousel/Carousel";
import "./container.css";
export default function WhiteboardContainer() {
  return (
    <div className = "content-section">
      <Customcarousel></Customcarousel>
      <WhiteBoard></WhiteBoard>
    </div>
  );
}
