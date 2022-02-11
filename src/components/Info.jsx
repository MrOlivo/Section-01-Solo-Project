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
        <a
          href="https://mail.com"
          target="_blank"
          className="btn email"
          rel="noreferrer"
        >
          <img src={mailSVG} alt="An email logo." className="btn--img" />
          <span>Email</span>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          className="btn linkedin"
          rel="noreferrer"
        >
          <img src={linkedinSVG} alt="LinkedIn logo." className="btn--img" />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
}
