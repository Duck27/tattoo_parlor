import React from "react";
import { useState } from "react";
import HeaderBackground from "../HeaderBackground/HeaderBackground.jsx";
import HeaderBody from "../HeaderBody/HeaderBody.jsx";

export const HeaderSection = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  return (
    <header className="relative">
      <HeaderBackground backgroundIndex={backgroundIndex} />
      <HeaderBody setBackgroundIndex={setBackgroundIndex}></HeaderBody>
    </header>
  );
};
