import React, { useEffect, useState } from "react";

const ProgressBar = ({ timer, onTimout }) => {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const time = setTimeout(() => {
      onTimout();
    }, timer);
    return () => {
      clearTimeout(time);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress max={timer} value={remainingTime} />;
};

export default ProgressBar;
