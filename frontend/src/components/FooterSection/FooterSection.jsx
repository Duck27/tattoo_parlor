import React from "react";
import Map from "../Map/Map";

const FooterSection = () => {
  return (
    <footer className="relative bg-black">
      <Map />
      <div className="flex flex-col text-white py-4">
        <div className="m-auto text-2xl">7-951-079-72-46</div>
        <div className="m-auto text-2xl">г.Пермь, ул.Екатериниская 59</div>
      </div>
    </footer>
  );
};

export default FooterSection;
