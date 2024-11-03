import React, { useState, useEffect } from 'react';
import './DigitalClock.css'; // Import the CSS file for styling

const FlipClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timerId); // Cleanup interval on component unmount
  }, []);

  const formatTimeUnit = (unit) => (unit < 10 ? `0${unit}` : unit);

const formatDate = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return time.toLocaleDateString(undefined, options);
  };

  return (
    <>
    <div className="flip-clock-container">
      <div className="flip-clock">
        <span className="flip-digit">{formatTimeUnit(time.getHours())}</span>
        <span className="flip-digit">{formatTimeUnit(time.getMinutes())}</span>
        <span className="flip-digit">{formatTimeUnit(time.getSeconds())}</span>
      </div>
      <div className="flip-date">
     <span>{formatDate()}</span>
     </div>
        </div>
     
     </>
  );
};

export default FlipClock;

