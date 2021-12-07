import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { faq_json } from "../../constant/_helper";
export default function Faqaccordion() {
  return (
    <div className="container">
      <Typography variant="h3" sx = {{fontSize:['1.5rem','2rem','3rem','3rem']}}>FAQ</Typography>
      {faq_json.map((faq, index) => {
        return (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.question}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
