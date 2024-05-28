import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";

const LearnMoreModal = ({ show = false, onProceed = () => {} }) => {
  useEffect(() => {
    if (show) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [show]);
  return (
    <>
      {show && (
        <div className="backdropBackground">
          <AnimatePresence>
            <motion.div
              key="modal"
              initial={{ opacity: 0, y: -200 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2,
                bounce: 0.6,
                type: "spring",
              }}
            >
              <div className="modalContents">
                <p>
                  Our platform allows anyone to easily create a mobile wallet,
                  load funds, and spend securely at participating merchants
                  using QR codes. For merchants, we provide tools to accept
                  contactless payments and settle instantly. <br />
                  <br />
                  Led by a team of experienced finance and technology experts,
                  CUER Payment aims to transition Nigeria from a 95% cash
                  economy by addressing key pain points in existing solutions.
                  We provide an accessible, user-friendly wallet and merchant
                  network that requires no POS, cards, or bank account.
                  <br />
                  <br /> Headquartered in Lagos, CUER Payment plans rapid growth
                  across Nigeria by acquiring 50 new merchants per week. With
                  our innovative technology and deliberate marketing, we project
                  500,000 mobile wallet downloads in Year 2 as we work to become
                  the #1 contactless payments provider.
                </p>
                <button className="modalButton" onClick={onProceed}>
                  CLOSE
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </>
  );
};

export default LearnMoreModal;
