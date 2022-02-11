import React from "react";
import GitHub from "../images/GitHub.svg";
import Facebook from "../images/Facebook.svg";
import Instagram from "../images/Instagram.svg";
import Twitter from "../images/Twitter.svg";

export default function Footer() {
  return (
    <div className="footer--container">
      <a href="https://www.twitter.com">
        <img src={Twitter} alt="Twitter" />
      </a>
      <a href="https://www.facebook.com">
        <img src={Facebook} alt="Facebook" />
      </a>
      <a href="https://www.instagram.com">
        <img src={Instagram} alt="Instagram" />
      </a>
      <a href="https://github.com">
        <img src={GitHub} alt="GitHub" />
      </a>
    </div>
  );
}
