import React from "react";
import linkedinSVG from "../images/linkedin.svg";
import mailSVG from "../images/mail.svg";

export default function Info() {
  return (
    <div className="info--container">
      <img
        src="src\images\Rectangle 90.png"
        loading="lazy"
        alt="imagen de perfil de un Clone Trooper estilo Lego."
        className="info--photo"
      />
      <h2 className="info--name">Edwin Olivo Garcia</h2>
      <p className="info--position">Desarrollador de Software</p>
      <p className="info--web"><a href="https://github.com/MrOlivo/">mrolivo.github.io</a></p>
      <div className="info--contact">
        <a
          href="mailto:"
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
