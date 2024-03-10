import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactInfoPart from "../ContactInfoPart/ContactInfoPart";
import ContactBackground from "../ContactBackground/ContactBackground";

const ContactSection = () => {
  return (
    <section className="relative mt-auto" id="contact">
      <ContactBackground />
      <div className="inset-x-0 inset-y-0 flex  justify-around absolute items-center container  mx-auto ">
        <div className="max-w-1/2 p-4  ">
          <div className="text-3xl text-white text-center mb-5">
            Оставьте свои данные и мы вам перезвоним
          </div>
          <ContactForm />
        </div>
        <ContactInfoPart />
      </div>
    </section>
  );
};

export default ContactSection;
