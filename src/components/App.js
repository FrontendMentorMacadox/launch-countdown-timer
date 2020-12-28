import "./App.css";
import React, { useState, useEffect } from "react";

import Timer from "./Timer";
import TimerCard from "./TimerCard";

import images from "../images/images";

const launchDate = Date.now() + 3600 * 1000 * 24 * 14 + 3000;

const App = () => {
  const [time, setTime] = useState(Date.now());

  const calculateTimer = (option) => {
    let difference = launchDate - time;

    const d = Math.floor(difference / 1000 / 3600 / 24);
    difference = difference - 3600 * 1000 * 24 * d;
    const h = Math.floor(difference / 1000 / 3600);
    difference = difference - 1000 * 3600 * h;
    const m = Math.floor(difference / 1000 / 60);
    difference = difference - 1000 * 60 * m;
    const s = Math.floor(difference / 1000);

    switch (option) {
      case "days": {
        return d.toString().padStart(2, "0");
      }
      case "hours": {
        return h.toString().padStart(2, "0");
      }
      case "minutes": {
        return m.toString().padStart(2, "0");
      }
      case "seconds": {
        return s.toString().padStart(2, "0");
      }
    }
  };

  useEffect(() => {
    if (launchDate - time > 1000) {
      setTimeout(() => {
        setTime(time + 1000);
      }, 1000);
    }
  }, [time]);

  return (
    <div
      className='app-wrapper'
      style={{ backgroundImage: `url("${images.bgStars}")` }}
    >
      <main>
        <h1>We're launching soon</h1>
        <div className='timer-wrapper'>
          <Timer className='timer'>
            <TimerCard label='Days' val={calculateTimer("days")} />
            <TimerCard label='Hours' val={calculateTimer("hours")} />
            <TimerCard label='Minutes' val={calculateTimer("minutes")} />
            <TimerCard label='Seconds' val={calculateTimer("seconds")} />
          </Timer>
        </div>
      </main>
      <footer style={{ backgroundImage: `url("${images.patternHills}")` }}>
        <div className='socials'>
          <a href='./' className='socials__button'>
            <img src={images.facebook} alt='go to facebook' />
          </a>
          <a href='./' className='socials__button'>
            <img src={images.pinterest} alt='go to pinterest' />
          </a>
          <a href='./' className='socials__button'>
            <img src={images.instagram} alt='go to instagram' />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
