import React from "react";
import "./App.css";
import { Footer, HeroSection, Navbar } from "./components";
import Chronicles from "./components/Chronicles";
import UseCuer from "./components/UseCuer";
import QrTech from "./components/QrTech";
import ScrollCard from "./components/ScrollCard";
import ElevatingExperience from "./components/ElevatingExperience";
import FrequentQuestions from "./components/FrequentQuestions";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <Chronicles />
      <UseCuer />
      <QrTech />
      <ScrollCard />
      <ElevatingExperience />
      <FrequentQuestions />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
