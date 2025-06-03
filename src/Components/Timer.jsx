import React from "react";
import TimeBox from "./TimeBox";

const Timer = () => {
  return (
    <div className="flex lg:w-11/12 w-full px-24 py-16 flex-col gap-14 items-center bg-timerBg backdrop-blur-3xl rounded-3xl border-2 border-solid border-white">
      <h1 className="font-semibold text-2xl font-publicSans text-center text-textDark">
        My Birthday Event Starts On
      </h1>
      <div className="flex items-center lg:gap-14 md:gap-6 gap-3">
        <TimeBox />
        <TimeBox />
        <TimeBox />
        <TimeBox />
      </div>
    </div>
  );
};

export default Timer;
