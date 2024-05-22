import React from "react";
import { doubleRight, happy, secure } from "../images";
import { motion } from "framer-motion";
const ElevatingExperience = () => {
  const data = [
    {
      image: happy,
      text: "Simple.",
      eText: "Easy to use for everyone.",
    },
    {
      image: doubleRight,
      text: "Swift.",
      eText: "Instant value in transactions.",
    },
    {
      image: secure,
      text: "Secure.",
      eText: "We ensure highest global security standards.",
    },
  ];
  return (
    <div className="elevationContainer" id="elevatingExperience">
      <p className="elevatingHeader">Elevating Payment Experiences</p>
      <div className="elevatingExperience">
        {data.map((item, index) => (
          <motion.div
            key={index}
            whileInView={{ y: 0 }}
            initial={{ y: 30 }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <div className="elevatingContent" key={index}>
              <div className="elevatingContain">
                <img src={item.image} alt="store" height={40} width={40} />
                <p className="merchant">{item.text}</p>
              </div>
              <div className="elevText">
                <p className="elevatingText">{item.eText}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ElevatingExperience;
