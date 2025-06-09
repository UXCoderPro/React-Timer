import React, { useState, useEffect } from "react";
import TimeBox from "./TimeBox";

const countDown = new Date("Apr 15, 2026 00:00:00").getTime();

const timeLeft = () => {
  const now = new Date().getTime();
  const distance = Math.max(0, countDown - now);
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  return { days, hours, minutes, seconds };
};

const Timer = () => {
  const [timer, setTimer] = useState(() => timeLeft());

  useEffect(() => {
    const timers = setInterval(() => {
      setTimer(timeLeft());
    }, 1000);

    return () => {
      clearInterval(timers);
    };
  }, []);

  return (
    <div className="flex lg:w-11/12 w-full px-24 py-16 flex-col gap-14 items-center bg-timerBg backdrop-blur-3xl rounded-3xl border-2 border-solid border-white">
      <h1 className="font-semibold text-2xl font-publicSans text-center text-textDark">
        My Birthday Event Starts On
      </h1>

      <div className="flex items-center lg:gap-14 md:gap-6 gap-3">
        <TimeBox time={timer.days} type="Days" />
        <TimeBox time={timer.hours} type="Hours" />
        <TimeBox time={timer.minutes} type="Minutes" />
        <TimeBox time={timer.seconds} type="Seconds" />
      </div>
    </div>
  );
};

export default Timer;
