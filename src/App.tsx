import React, { useState } from "react";
import "./App.css";
import { Footer, HeroSection, Navbar } from "./components";
import Chronicles from "./components/Chronicles";
import UseCuer from "./components/UseCuer";
import QrTech from "./components/QrTech";
import ScrollCard from "./components/ScrollCard";
import ElevatingExperience from "./components/ElevatingExperience";
import FrequentQuestions from "./components/FrequentQuestions";
import ContactUs from "./components/ContactUs";
import LearnMoreModal from "./components/modal/LearnMoreModal";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <Chronicles setShowModal={setShowModal} />
      <UseCuer />
      <QrTech />
      <ScrollCard />
      <ElevatingExperience />
      <FrequentQuestions />
      <ContactUs />
      <Footer />
      <LearnMoreModal onProceed={() => setShowModal(false)} show={showModal} />
    </div>
  );
}

export default App;
