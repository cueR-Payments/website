import React, { useEffect, useState } from "react";
import { cuerLogo, cuerLogoWhite } from "../images";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  // const openAllTabsLinks = () => {
  //   const learnMoreFocus = window.open("https://", "_blank");
  //   const telegramFocus = window.open("https://", "_blank");
  //   const twitterFocus = window.open("https://", "_blank");
  //   const discordFocus = window.open("https://", "_blank");
  //   const mediumFocus = window.open("https://", "_blank");

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
  const [isAtFooter, setIsAtFooter] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      if (footer) {
        const footerPosition = footer.getBoundingClientRect().top;
        const navbar = document.getElementById("navbar");
        if (navbar) {
          const navbarPosition = navbar.getBoundingClientRect().bottom;
          setIsAtFooter(navbarPosition >= footerPosition);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="navbar_container" id="navbar">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <img
          className="logo"
          src={isAtFooter ? cuerLogoWhite : cuerLogo}
          alt="appLogo"
          width={150}
          height={55}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Link
          to="storeDownload"
          smooth={true}
          spy={true}
          offset={-750}
          duration={2000}
        >
          <p
            className="downloadApp"
            style={{ color: isAtFooter ? "white" : "" }}
          >
            Download App
          </p>
        </Link>
      </motion.div>
    </div>
  );
};

export default Navbar;
