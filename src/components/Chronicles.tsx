import { rightChevArrow } from "../images";
import { motion } from "framer-motion";

const Chronicles = ({ setShowModal }: any) => {
  return (
    <div className="chroniclesContainer" id="chronicles">
      <div className="dive_container">
        <motion.div
          whileInView={{ x: 0 }}
          initial={{ x: -50 }}
          transition={{ duration: 1, stiffness: 100 }}
        >
          <h1 className="chronicle_head">Dive into Our Company's Chronicle.</h1>
        </motion.div>
      </div>
      <div className="aboutContainer">
        <motion.div
          whileInView={{ x: 0 }}
          initial={{ x: 50 }}
          transition={{ duration: 1 }}
        >
          <h4 className="about_us">About us</h4>
          <p className="about_us_content">
            CUER Payment is a Nigerian fintech startup founded in 2022 that
            provides contactless mobile wallet and merchant solutions. Our
            mission is to facilitate seamless QR-based financial transactions to
            drive the adoption of cashless payments in Nigeria.
          </p>
          <div className="learnMore">
            <div
              onClick={() => setShowModal(true)}
              style={{
                display: "flex",
                background: "rgba(0,0,0,0.02)",
                borderRadius: 8,
                width: 200,
                cursor: "pointer",
                alignItems: "center",
                justifyContent: "center",
                padding: 16,
              }}
              className="learnMoreAd"
            >
              <p className="about_us">Learn more &nbsp;</p>
              <img
                src={rightChevArrow}
                alt="rightArrow"
                height={24}
                width={24}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Chronicles;
