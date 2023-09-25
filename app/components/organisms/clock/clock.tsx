"use client";

import React, { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = 0;

    if (time < 3600) {
      // If less than an hour, increment seconds
      interval = window.setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [time]);

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div className="clock-counter">
      <div className="time">
        <span>{formatTime(time)}</span>
      </div>
    </div>
  );
}

export default Clock;
