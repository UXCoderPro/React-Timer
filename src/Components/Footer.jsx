import React from "react";

const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <div className="w-full fixed bottom-9 h-10 flex justify-start items-center gap-2  lg:px-10 px-4">
      <hr className="h-[2px] lg:flex hidden rounded-3xl w-32 bg-textDark border-none outline-none" />
      <p className="text-textDark font-amiri lg:text-lg text-base leading-normal font-normal">
        ⓒ {year} Abdul Aziz V I. Designed to delight, developed to perform.
      </p>
    </div>
  );
};

export default Footer;
