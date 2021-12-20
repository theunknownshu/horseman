import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faq_json } from "../../constant/_helper";
import "./Faq.css";
import img_faq_golf from "../../assets/images/img_faq_golf.png";
import { global_styles } from "../../constant/_helper";
export default function Faqaccordion() {
  return (
    <div id="id_faq" className="container pt-5">
      <Typography variant="h3" sx={global_styles.headerstyle}>
        FAQ
      </Typography>
      <div className="container px-5 mt-5" style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            right: "0",
            top: "20px"
          }}
        >
          <img
            className="show_faq_golf"
            src={img_faq_golf}
            style={{ height: "400px" }}
          ></img>
        </div>
        <div className="row responsive_padding" style={{ zIndex: 1000 }}>
          {faq_json.map((faq, index) => {
            return (
              <Accordion
                sx={{
                  backgroundColor: "transparent",
                  color: "white",
                  width: "100%"
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography sx={global_styles.faq_question_style}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={global_styles.faq_answer_style}
                    align="left"
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </div>
    </div>
  );
}
