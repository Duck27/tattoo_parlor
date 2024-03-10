import React from "react";

const ContactInfoPart = () => {
  return (
    <div className="w-1/2 lg:flex hidden ml-10  h-[270px] bg-[#979292]/50 flex flex-col rounded-3xl items-center justify-around text-3xl text-white text-center">
      <div className="">
        <div className="">+7 (995) 13-666-96</div>
        <div className="">omyt.tattoo@gmail.com</div>
      </div>
      <div className="container ">
        <div className="h-1 bg-white"></div>
      </div>
      <div>г. Пермь, ул.Екатериниская 59</div>
    </div>
  );
};

export default ContactInfoPart;
