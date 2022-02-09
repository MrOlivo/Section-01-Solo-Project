import React from "react";
import photo from "../images/Rectangle 90.png";
import linkedinSVG from "../images/linkedin.svg";
import mailSVG from "../images/mail.svg";

export default function Info() {
  return (
    <div className="info--container">
      <img src={photo} alt="A woman smiling." />
      <h2 className="info--name">Laura Smith</h2>
      <p className="info--position">Frontend Developer</p>
      <p className="info--web">laurasmith.website</p>
      <div className="info--contact">
        <button className="btn email">
          <img src={mailSVG} alt="An email logo." />
          <span>Email</span>
        </button>
        <button className="btn linkedin">
          <img src={linkedinSVG} alt="LinkedIn logo." />
          <span>LinkedIn</span>
        </button>
      </div>
    </div>
  );
}
