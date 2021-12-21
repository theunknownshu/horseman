import * as React from "react";
import Horsemap from "../horsemap/Horsemap";
import Introduce from "../introduce/Introduce";
import Mintsection from "../mintsection/Mintsection";
import Faqaccordion from "../faq/Faq";
import Team from "../team/Team";
import Header from "../header/Header";
import Customcarousel from "../carousel/Carousel";
import "./container.css";
import Footer from "../footer/Footer";
export default function HomeContainer(props) {
  return (
    <div className="">
      <Header></Header>
      <div className="content-section">
        <Customcarousel></Customcarousel>
        <Introduce></Introduce>
        
        <Mintsection checkMintable = {props.checkMintable} walletAddress = {props.walletAddress}></Mintsection>
        <Horsemap></Horsemap>
        <Faqaccordion></Faqaccordion>
        <Team></Team>
        <Footer></Footer>
      </div>
    </div>
  );
}
