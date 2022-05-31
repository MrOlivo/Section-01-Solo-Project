import React from "react";
import linkedinSVG from "../images/linkedin.svg";
import mailSVG from "../images/mail.svg";

export default function Info() {
  return (
    <div className="info--container">
      <img
        src="https://media-exp1.licdn.com/dms/image/C5603AQFOm1xw4kfWkA/profile-displayphoto-shrink_800_800/0/1651100907581?e=1659571200&amp;v=beta&amp;t=dKc-QpDF8lkU89aZsqSTH7cDU6QI6jaR6nreF3KyW-4"
        loading="lazy"
        alt="imagen de perfil de un Clone Trooper estilo Lego."
        className="info-photo"
      />
      <h2 className="info--name">Edwin Olivo Garcia</h2>
      <p className="info--position">Desarrollador de Software</p>
      <p className="info--web">mrolivo.github.io</p>
      <div className="info--contact">
        <a
          href="mailto:edwin.olivo@outlook.com"
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
