import React, { useState, useRef, useEffect } from "react";

const TimerCard = ({ val, label }) => {
  const [value, setValue] = useState(val);
  const ref = useRef(null);

  if (value !== val) setValue(val);

  useEffect(() => {
    ref.current.classList.add("timer__card--flipped");
    setTimeout(() => {
      ref.current.classList.remove("timer__card--flipped");
    }, 750);
  }, [value]);

  return (
    <div className='timer__card'>
      <div ref={ref} className='timer__square'>
        <div className='flip flip--front'>{val}</div>
        <div className='flip flip--back'>{val}</div>
      </div>
      <div className='timer__label'>{label}</div>
    </div>
  );
};

export default TimerCard;
