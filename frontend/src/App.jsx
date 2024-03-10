import "./App.css";
import AboutSection from "./components/AboutSection/AboutSection";
import ContactSection from "./components/ContactSection/ContactSection.jsx";
import FooterSection from "./components/FooterSection/FooterSection";
import { HeaderSection } from "./components/HeaderSection/HeaderSection";
import { useState } from "react";

function App() {

  return (
    <>
      <HeaderSection />
      <main>
        <AboutSection />
        <ContactSection />
      </main>
      <FooterSection />
    </>
  );
}

export default App;
