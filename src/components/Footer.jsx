import React from "react";
import GitHub from "../images/GitHub.svg";
import Facebook from "../images/Facebook.svg";
import Instagram from "../images/Instagram.svg";
import Twitter from "../images/Twitter.svg";

export default function Footer() {
  return (
    <div className="footer--container">
      <img src={Twitter} alt="Twitter" />
      <img src={Facebook} alt="Facebook" />
      <img src={Instagram} alt="Instagram" />
      <img src={GitHub} alt="GitHub" />
    </div>
  );
}
