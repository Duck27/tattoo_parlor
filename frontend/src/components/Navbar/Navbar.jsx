import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full">
      <ul className="flex flex-column text-2xl space-around ">
        <li className="flex-1 text-center self-center ">
          <a href="#about" className="link">
            О нас
          </a>
        </li>
        <li className="flex-1 text-center self-center ">
          <a href="#gallery" className="link">
            Галерея
          </a>
        </li>
        <li className="flex-1 text-center self-center select-none">
          <span className="">
            <img
              className="mt-[15px] mx-auto"
              src="../../../public/imgs/logo.png"
            ></img>
          </span>
        </li>
        <li className="flex-1 text-center self-center ">
          <a href="#masters" className="link">
            Наши мастера
          </a>
        </li>
        <li className="flex-1 text-center self-center ">
          <a href="#contact" className="link">
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
