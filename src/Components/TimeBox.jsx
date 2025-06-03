import React from "react";

const TimeBox = () => {
  return (
    <div className="lg:w-60 lg:h-60 md:w-28 md:h-28 w-24 h-24 flex flex-col justify-center items-center gap-2.5 p-8 bg-custom-gradient">
      <h1 className="text-textDark text-center font-publicSans lg:text-8xl md:text-5xl text-3xl font-semibold leading-normal">
        02
      </h1>
      <p className="text-textDark text-center font-publicSans lg:text-lg text-sm font-medium">
        DAYS
      </p>
    </div>
  );
};

export default TimeBox;
