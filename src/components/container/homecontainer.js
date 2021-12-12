import * as React from "react";
import Horsemap from "../horsemap/Horsemap";
import Introduce from "../introduce/Introduce";
import Mintsection from "../mintsection/Mintsection";
import Faqaccordion from "../faq/Faq";
import Team from "../team/Team";
export default function HomeContainer() {
  return (
    <>
      <Introduce></Introduce>
      <Mintsection></Mintsection>
      <Horsemap></Horsemap>
      <Faqaccordion></Faqaccordion>
      <Team></Team>
    </>
  );
}
