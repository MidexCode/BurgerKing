import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import takeoutIcon from "../../assets/takeoutIcon.svg";
import dineinIcon from "../../assets/dineinIcon.svg";
import deliveryIcon from "../../assets/deliveryIcon.svg";

export const AccordionTransition = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="icon-1">
            <img src={dineinIcon} alt="cutlery" />
            <p>Dine-in Pickup</p>
          </div>
        </AccordionSummary>
        <AccordionDetails>Order is served in restaurants</AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <div className="icon-1">
            <img src={takeoutIcon} alt="cutlery" />
            <p>Takeout</p>
          </div>
        </AccordionSummary>
        <AccordionDetails>Order is packed for outside</AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <div className="icon-1">
            <img src={deliveryIcon} alt="cutlery" />
            <p>Delivery</p>
          </div>
        </AccordionSummary>
        <AccordionDetails>Order is delivered to you.</AccordionDetails>
      </Accordion>
    </div>
  );
};
