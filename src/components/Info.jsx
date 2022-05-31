import React from "react";
import photo from "../images/Rectangle 90.png";
import linkedinSVG from "../images/linkedin.svg";
import mailSVG from "../images/mail.svg";

export default function Info() {
  return (
    <div className="info--container">
      <img src={photo} alt="Un hombre apuesto." />
      <h2 className="info--name">Edwin Olivo</h2>
      <p className="info--position">Desarrollador</p>
      <p className="info--web">https://www.mrolivo.github.io</p>
      <div className="info--contact">
        <a
          href="https://edwin.olivo@outlook.com"
          target="_blank"
          className="btn email"
          rel="noreferrer"
        >
          <img src={mailSVG} alt="An email logo." className="btn--img" />
          <span>Email</span>
        </a>
        <a
          href="https://linkedin.com/in/edwin-olivo-garcia"
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
