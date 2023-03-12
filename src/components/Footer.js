import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <LinkedInIcon />
        <FacebookIcon />
        <InstagramIcon />
      </div>
      <p> 2023 Brad Buchholz</p>
    </div>
  );
}

export default Footer;