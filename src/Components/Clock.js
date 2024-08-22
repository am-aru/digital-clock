import React, { useState, useEffect } from 'react';
import '../index.css'


const Clock = () => {
  const curTime = new Date().toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  });
  const [time, setTime] = useState(curTime);

  const updateTime = () => {
    const newTime = new Date().toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    });
    setTime(newTime);
  };

  useEffect(() => {
    const timerId = setInterval(updateTime, 1000);
    return () => clearInterval(timerId); // Clean up the interval on component unmount
  }, []);

  return (
    <div className='container'>
      <h1 className='text'>Digital Clock</h1>
      <h1>{time}</h1>
    </div>
  );
};

export default Clock;
