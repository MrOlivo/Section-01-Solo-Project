import GitHub from "../images/GitHub.svg";
import Facebook from "../images/Facebook.svg";
import Instagram from "../images/Instagram.svg";
import Twitter from "../images/Twitter.svg";

export default function Footer() {
  return (
    <div className="footer--container">
      <a href="https://www.twitter.com">
        <img src={Twitter} alt="Twitter" className="footer--social" />
      </a>
      <a href="https://www.facebook.com">
        <img src={Facebook} alt="Facebook" className="footer--social" />
      </a>
      <a href="https://www.instagram.com">
        <img src={Instagram} alt="Instagram" className="footer--social" />
      </a>
      <a href="https://github.com/MrOlivo">
        <img src={GitHub} alt="GitHub" className="footer--social" />
      </a>
    </div>
  );
}
