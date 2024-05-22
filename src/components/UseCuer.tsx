import React from "react";
import {
  blackstoreapple,
  blackstoregoogle,
  clipboard,
  hand,
  send,
} from "../images";
import { motion } from "framer-motion";
import Cuercard from "./cards/Cuercard";

const UseCuer = () => {
  const cards = [
    {
      image: send,
      text: "Make Payment",
    },
    {
      image: hand,
      text: "Send Money",
    },
    {
      image: hand,
      text: "Receive Money",
    },
    {
      image: clipboard,
      text: "Pay Bills",
    },
    // {
    //   image: chart,
    //   text: "Airtime and Data",
    // },
  ];
  return (
    <div className="makeuseContainer" id="makeUse">
      <div className="dive_container">
        <motion.div
          whileInView={{ y: 0 }}
          initial={{ y: -50 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="cuer_header">Make use of CueR for</h1>
        </motion.div>
      </div>
      <div className="card_container">
        {cards.map((item, index) => (
          <motion.div
            key={index}
            whileInView={{ y: 0 }}
            initial={{ y: -30 }}
            transition={{ duration: 1.2, delay: index * 0.4 }}
          >
            <Cuercard image={item.image} text={item.text} key={index} />
          </motion.div>
        ))}
      </div>
      <div className="cuerContainer">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
        >
          <p className="cuer_content">
            Use CueR for fast and secure transactions, simplifying your
            financial interactions. Employ CueR to streamline payments and enjoy
            peace of mind when managing your money.
          </p>
          <motion.div
            whileInView={{ scale: 1 }}
            initial={{ scale: 0.9 }}
            id="storeDownload"
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="button-container">
              <img
                src={blackstoreapple}
                alt="appstore"
                className="appStore"
                height={46}
                width={160}
              />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img
                src={blackstoregoogle}
                alt="googlestore"
                height={46}
                className="googleStore"
                width={160}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default UseCuer;
