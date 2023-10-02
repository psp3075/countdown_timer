import React, { useEffect, useState } from "react";

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

function Timer(props) {
  const [time, setTime] = useState(props.duration);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(time - 1000);
    }, 1000);

    if (time <= 0) {
      props.onExpire && props.onExpire();
      clearTimeout(timer);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [time, props.onExpire]);

  const getFormattedTime = (time) => {
    const days = Math.floor(time / DAY);
    const hours = Math.floor((time % DAY) / HOUR);
    const minutes = Math.floor((time % HOUR) / MINUTE);
    const seconds = Math.floor((time % MINUTE) / SECOND);
    return `${days}:${hours}:${minutes}:${seconds}`;
  };

  return <>{getFormattedTime(time)}</>;
}

export default Timer;
