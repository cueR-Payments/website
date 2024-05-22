import React from "react";
import { motion } from "framer-motion";
import { data } from "./data";
const ScrollCard = () => {
  return (
    <div className="scrollCard_container">
      <motion.div
        className="scrollContain"
        animate={{
          x: [100, "100%", "-100%"], // Move left, offscreen left, offscreen right
        }}
        whileInView={{
          x: "-100%", // Move left, offscreen left, offscreen right
        }}
        transition={{
          duration: 640, // Adjust duration as needed
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {data.map((item, index) => (
          <div className="scrollCard" key={index}>
            <img src={item.ecllipse} height={30} width={30} alt="ecllipse" />
            <img src={item.lock} height={100} width={100} alt="greyLock" />
            <p className="scrollCardText">{item.text}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollCard;
