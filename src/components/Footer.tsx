import React from "react";
import {
  cuerLogoWhite,
  facebook,
  instagram,
  linkedin,
  twitter,
} from "../images";
import { Link } from "react-scroll";

const Footer = () => {
  // const openAllTabsLinks = () => {
  //   const learnMoreFocus = window.open("https://docs.collat.finance", "_blank");
  //   const telegramFocus = window.open("https://t.me/collatfinance", "_blank");
  //   const twitterFocus = window.open(
  //     "https://twitter.com/CollatFinance",
  //     "_blank"
  //   );
  //   const discordFocus = window.open("https://discord.gg/QrtvFgGn7r", "_blank");
  //   const mediumFocus = window.open(
  //     "https://collatfinance.medium.com",
  //     "_blank"
  //   );

  //   if (
  //     learnMoreFocus &&
  //     telegramFocus &&
  //     twitterFocus &&
  //     discordFocus &&
  //     mediumFocus
  //   ) {
  //     learnMoreFocus.focus();
  //     telegramFocus.focus();
  //     twitterFocus.focus();
  //     discordFocus.focus();
  //     mediumFocus.focus();
  //   } else {
  //     console.error("Popup blockers prevented some windows from opening.");
  //   }
  // };
  return (
    <div className="footerMain" id="footer">
      <div className="footer_contents">
        <div className="footer_con">
          <img
            src={cuerLogoWhite}
            width={150}
            height={55}
            className="logo"
            alt="footerImage"
          />
          <br />
          <br />
          <p>
            At CueR, we're dedicated to revolutionizing the payment experience.
            We've developed an advanced app to simplify and secure your
            financial transactions, leaving behind the frustrations of
            traditional methods.
          </p>
        </div>
        <div className="companyContainer">
          <p className="footerRights">Company</p>
          <Link
            to="chronicles"
            smooth={true}
            spy={true}
            offset={-400}
            duration={2000}
            style={{ cursor: "pointer" }}
          >
            <p className="footer_texts">About Us</p>
          </Link>
          <Link
            to="frequentQuestions"
            smooth={true}
            spy={true}
            offset={-200}
            duration={2000}
            style={{ cursor: "pointer" }}
          >
            <p className="footer_texts">Frequently Asked Questions</p>
          </Link>
          <Link
            to="elevatingExperience"
            smooth={true}
            spy={true}
            offset={-200}
            duration={2000}
            style={{ cursor: "pointer" }}
          >
            <p className="footer_texts">Elevating Payment Experience</p>
          </Link>
          <Link
            to="storeDownload"
            smooth={true}
            spy={true}
            offset={-750}
            duration={2000}
            style={{ cursor: "pointer" }}
          >
            <p className="footer_texts">What we do</p>
          </Link>
        </div>
        <div className="companyContainer2">
          <p className="footerRights">Contact Us</p>
          <Link
            to="contactUs"
            smooth={true}
            spy={true}
            offset={-100}
            duration={2000}
            style={{ cursor: "pointer" }}
          >
            <p className="footer_texts">How can we help?</p>
          </Link>
          {/* <p className="footerRights">Phone Number</p>
          <p className="footer_texts">+234 (0) 809 982 1444</p> */}
          <p className="footerRights">Email</p>
          <p className="footer_texts">support@cuertech.com</p>
          <p className="footerRights">Social Media</p>
          <div className="footer_images">
            <a
              href="https://"
              target="_blank"
              rel="noreferrer"
              className="footerLinks"
            >
              <img src={linkedin} alt="linkedIn" width={40} height={40} />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://"
              target="_blank"
              rel="noreferrer"
              className="footerLinks"
            >
              <img src={twitter} alt="twitter" width={40} height={40} />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://"
              target="_blank"
              rel="noreferrer"
              className="footerLinks"
            >
              <img src={instagram} alt="instagram" width={40} height={40} />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a
              href="https://"
              target="_blank"
              rel="noreferrer"
              className="footerLinks"
            >
              <img src={facebook} alt="facebook" width={40} height={40} />
            </a>
          </div>
        </div>
      </div>
      <div className="bottomFooter">
        <p className="footer_texts">&copy; 2024 CueR Limited</p>
        <div className="rightBottomFooter">
          <p className="footer_texts">Cookies Preference</p>
          <a
            href="https://"
            target="_blank"
            rel="noreferrer"
            className="footerLinks"
          >
            <p className="footer_texts">Privacy</p>
          </a>
          <a
            href="https://"
            target="_blank"
            rel="noreferrer"
            className="footerLinks"
          >
            <p className="footer_texts">Terms of Use</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
