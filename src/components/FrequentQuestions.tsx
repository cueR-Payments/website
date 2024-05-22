import React, { useState } from "react";
import { frequentlyAsked, openArrow } from "../images";
import { motion } from "framer-motion";

const FrequentQuestions = () => {
  const [expanded, setExpanded] = useState<number | null>(null);
  const data = [
    {
      title: "What is CUER Payment?",
      content:
        "CUER Payment is a Nigerian-based fintech startup that provides innovative contactless payment solutions, digital wallets, and merchant platforms to facilitate convenient and secure financial transactions for customers and businesses.",
    },
    {
      title: "How does the CUER Payment wallet work?",
      content:
        "To begin using CueR, simply download the app from your device's app store. Follow the setup instructions to create an account, link your preferred payment methods, and you're ready to go.",
    },
    {
      title: "What can I pay for with my CUER Payment wallet?",
      content:
        "Our wallet works at grocery stores, pharmacies, markets, toll gates, fuel stations and many more merchants across Nigeria. Anywhere you see our logo, you can scan and pay quickly with your mobile phone.",
    },
    {
      title: "Is CUER Payment secure?",
      content:
        "Yes, we use bank-level encryption and comply with all financial data protection regulations to keep your information and transactions safe. You stay in control of your money.",
    },
    {
      title: "How do businesses accept CUER Payments?",
      content:
        "Merchants can sign up on our website for our customizable mobile app and tools to start accepting contactless payments from CUER Payment wallet users instantly.",
    },
    {
      title: "What makes CUER Payment different?",
      content:
        "We provide an easy, accessible digital wallet and payment network for the millions of unbanked Nigerians. With no need for cards, bank accounts, or POS terminals, CUER Payment is the seamless contactless future of payments.",
    },
    {
      title:
        "How does CUER Payment compare to other payment solutions in Nigeria?",
      content:
        "We stand out by providing a user-centric platform that simplifies financial transactions. While some competitors focus on specific niches or rely on NFC technology, we offer a versatile and user-friendly solution suitable for a wide range of users and businesses.",
    },
    {
      title:
        "Can I use CUER Payment if I don't have a bank account or ID card?",
      content:
        "Yes, our platform allows for easy sign-ups without the need for a Bank Verification Number (BVN) or ID card. We aim to provide access to individuals without bank accounts, including minors and low-income earners.",
    },
    {
      title: "What is your vision for the future of CUER Payment?",
      content:
        "Our vision is to become the leading provider of contactless payment solutions in Nigeria, empowering users to create, load, and spend from their digital wallets across Africa for any type of transaction",
    },
    {
      title:
        "How can I get in touch with CUER Payment for further inquiries or partnerships?",
      content:
        "You can contact us through our website, social media channels, or by email at support@cuertech.com We are open to partnerships with financial institutions, microfinance banks, identity verification services, existing mobile wallet companies, and traditional banks. \nReach out to our sales team at sales@cuertech.com to learn more!",
    },
  ];

  const handleAccordionClick = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="frequentContainer" id="frequentQuestions">
      <div className="frequentImg">
        <br />
        <p className="header">
          Frequently Asked <br />
          Questions
        </p>
        <br />
        <img
          src={frequentlyAsked}
          className="frequentImage"
          alt="frequentImage"
        />
      </div>
      <div className="accordionContainer">
        {data.map((item, index) => (
          <button
            key={index}
            onClick={() => handleAccordionClick(index)}
            className="buttonClick"
          >
            <motion.div
              key={index}
              whileInView={{ x: 0 }}
              initial={{ x: 50 }}
              transition={{ duration: 1, delay: index * 0.1 }}
            >
              <div
                className="titleContainer"
                style={{
                  background:
                    expanded === index ? "rgba(240, 245, 250, 1)" : "white",
                }}
              >
                <p className="click_title">{item.title}</p>
                <motion.img
                  src={openArrow}
                  height={8}
                  alt=""
                  transition={{ duration: 1 }}
                  animate={{ rotate: expanded === index ? 0 : 180 }}
                />
              </div>
            </motion.div>
            {expanded === index && (
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: -10 }}
                transition={{ duration: 1 }}
              >
                <div
                  className="accordionContent"
                  style={{
                    background:
                      expanded === index ? "rgba(240, 245, 250, 1)" : "white",
                  }}
                >
                  <p className="frequent_content">{item.content}</p>
                </div>
              </motion.div>
            )}
          </button>
        ))}
      </div>
      <img
        src={frequentlyAsked}
        className="frequentImage2"
        alt="frequentImage"
      />
    </div>
  );
};

export default FrequentQuestions;
