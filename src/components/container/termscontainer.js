import * as React from "react";
import Customcarousel from "../carousel/Carousel";
import "./container.css";
import TermsCondition from "../termscondition/TermsCondition";
export default function TermsContainer(props) {
  return (
    <div className = "content-section">
      <Customcarousel></Customcarousel>
      <TermsCondition></TermsCondition>
    </div>
  );
}
