import React from "react";
import {
  appstore,
  googleStore,
  iphoneImgone,
  rightArr,
  rightRemArrow,
  store,
  user,
} from "../images";
import { motion } from "framer-motion";

const QrTech = () => {
  return (
    <div className="qrtechContainer" id="useCuer">
      <div className="left-qr-content">
        <motion.div
          whileInView={{ y: 0 }}
          initial={{ y: 10 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <p className="header">Using our advanced QR technology</p>
        </motion.div>
        <div className="store-container">
          <motion.div
            initial={{ y: 50 }}
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
          <motion.div
            initial={{ y: 80 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
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
        <div className="rightRem">
          <motion.div>
            <img src={rightRemArrow} alt="rightRem" width={94} height={150} />
          </motion.div>
          <motion.div
            animate={{ x: [0, -20, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <img
              src={rightArr}
              className="rightButt"
              alt="rightRem"
              width={25}
              height={50}
            />
          </motion.div>
        </div>
      </div>
      <div className="center-qr-content">
        <div className="rightRems">
          <img src={rightRemArrow} alt="rightRem" width={94} height={150} />

          <motion.div
            animate={{ x: [0, -20, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <img
              src={rightArr}
              className="rightButts"
              alt="rightRem"
              width={25}
              height={50}
            />
          </motion.div>
        </div>
        <motion.div
          whileInView={{ rotateX: 0 }}
          initial={{ rotateX: 60 }}
          transition={{ duration: 1 }}
          className="floatImage"
        >
          <img
            src={iphoneImgone}
            height={747}
            width={362}
            className="iphoneImage"
            alt="iphoneImgOne"
          />
        </motion.div>
      </div>
      <div className="right-qr-content">
        <motion.div
          whileInView={{ y: 0 }}
          initial={{ y: -20 }}
          transition={{ duration: 1 }}
        >
          <div className="bothcontent">
            <img src={store} alt="store" height={40} width={40} />
            <p className="merchant">
              Merchants enjoy instant payments, reducing wait times and
              strengthening their financial tability. This feature empowers
              businesses to reinvest and grow more efficiently.
            </p>
          </div>
          <div className="bothParties_content">
            <img src={store} alt="store" height={40} width={40} />
            <p className="merchant">
              Merchants enjoy instant payments, reducing wait times and
              strengthening their financial tability. This feature empowers
              businesses to reinvest and grow more efficiently.
            </p>
          </div>
          <div className="bothParties_content">
            <img src={user} alt="user" height={40} width={40} />
            <p className="customer">
              Customers can easily make payments for various goods and services,
              ensuring a smooth and convenient transaction experience at their
              favorite local stores or online services.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QrTech;
