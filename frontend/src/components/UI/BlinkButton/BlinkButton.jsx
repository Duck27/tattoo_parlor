import React from "react";

const BlinkButton = ({ onClick, children, ...props }) => {
  console.log(props);
  return (
    <button
      {...props}
      onClick={onClick}
      className="relative group w-[335px] h-[85px] border border-black border-2  hover:bg-white hover:text-black transition-all duration-300  cursor-pointer flex items-center justify-center rounded-full"
    >
      <span className="group-hover:text-black m-auto text-4xl text-white text-lg font-bold select-none flex justify-center items-center w-full h-full">
        {children}
      </span>
    </button>
  );
};

export default BlinkButton;
