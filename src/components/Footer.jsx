import GitHub from "../images/GitHub.svg";
import Facebook from "../images/Facebook.svg";
import Instagram from "../images/Instagram.svg";
import Twitter from "../images/Twitter.svg";

export default function Footer() {
  return (
    <div className="footer--container">
      <a href="https://www.twitter.com">
        <img
          src={Twitter}
          alt="Twitter icon"
          className="footer--social"
          loading="lazy"
        />
      </a>
      <a href="https://www.facebook.com">
        <img
          src={Facebook}
          alt="Facebook icon"
          className="footer--social"
          loading="lazy"
        />
      </a>
      <a href="https://www.instagram.com">
        <img
          src={Instagram}
          alt="Instagram icon"
          className="footer--social"
          loading="lazy"
        />
      </a>
      <a href="https://github.com/MrOlivo">
        <img
          src={GitHub}
          alt="GitHub icon"
          className="footer--social"
          loading="lazy"
        />
      </a>
    </div>
  );
}
