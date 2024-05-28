import React from "react";
import {
  appstore,
  bottomArrow,
  googleStore,
  iphoneImgTwo,
  jblspeaker,
  transactionSuccess,
} from "../images";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <div className="heroTop-container">
      <div id="company">
        <div className="heroSection_container">
          <div className="hero_container">
            <motion.div
              whileInView={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ duration: 1, stiffness: 100 }}
            >
              <div className="head_content">
                <h1 className="hero_header">
                  Instant Payment{" "}
                  <span className="across_content">across Nigeria</span>
                </h1>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <p className="middle_content">
                Ready to ditch cash and long queues? Meet CueR, your key to easy
                and secure payments. Take control of your finances with CueR.
              </p>
            </motion.div>
          </div>
          <div className="button_container">
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
            >
              <a href="https://" target="_blank" rel="noreferrer">
                <img
                  className="appStore"
                  src={appstore}
                  alt="appStore"
                  height={46}
                  width={160}
                />
              </a>
            </motion.div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <motion.div
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <a href="https://" target="_blank" rel="noreferrer">
                <img
                  src={googleStore}
                  className="googleStore"
                  alt="googleStore"
                  height={46}
                  width={160}
                />
              </a>
            </motion.div>
          </div>
          <div>
            <br />
            <br />
            <br />
            <motion.div
              animate={{ y: [0, -40, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <div className="leftImage">
                <img
                  src={jblspeaker}
                  height={120}
                  width={350}
                  alt="jblSpeaker"
                />
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 40, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <div className="rightImage">
                <img
                  src={transactionSuccess}
                  height={250}
                  width={350}
                  alt="transactionSuccess"
                />
              </div>
            </motion.div>
            <motion.div
              className="chroniclesBottomImage"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1, repeat: Infinity, stiffness: 10 }}
            >
              <Link
                to="makeUse"
                smooth={true}
                spy={true}
                offset={-100}
                duration={2000}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={bottomArrow}
                  alt="bottomArrow"
                  height={40}
                  width={40}
                />
              </Link>
            </motion.div>
            <motion.div
              whileInView={{ rotateX: 0 }}
              initial={{ rotateX: 60 }}
              transition={{ duration: 1 }}
            >
              <img
                src={iphoneImgTwo}
                height={747}
                width={362}
                className="iphoneImage"
                alt="iphoneImg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
