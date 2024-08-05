import React from 'react'
import './count.css'
import { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

const Count = ({ endCount }) => {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const counterTop = counterRef.current.offsetTop;
      const windowHeight = window.innerHeight;
      const scrollTop = window.pageYOffset;

      if (counterRef.current && counterTop < windowHeight + scrollTop) {
        setIsCounting(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isCounting) {
      const intervalId = setInterval(() => {
        setCount((prevCount) => Math.min(prevCount + 1, endCount));
        if (count === endCount) clearInterval(intervalId);
      }, 10);

      return () => clearInterval(intervalId);
    }
  }, [isCounting, endCount]);
  return (
    <div className='count'>
      <h1>Some count that matters</h1>
      <p className='count-p'>Our achievement in the journey depicted in numbers</p>

      <div className='count-numbers'>
        <div className="count-numbers-section">
        <div ref={counterRef}>
      {isCounting ? (
        <CountUp end={30} start={0} duration={8} />
      ) : (
        <span>{count}</span>
      )}
    </div>
        <p>Clients</p>
        </div>

        <div className="count-numbers-section middle">
        <div ref={counterRef}>
      {isCounting ? (
        <CountUp end={300} start={0} duration={8} />
      ) : (
        <span>{count}</span>
      )}
    </div>
        <p>Taken business legalities</p>
        </div>

        <div className="count-numbers-section">
        <div ref={counterRef}>
      {isCounting ? (
        <CountUp end={8} start={0} duration={8} />
      ) : (
        <span>{count}</span>
      )}
    </div>
        <p>Years of Journey</p>
        </div>
      </div>
    </div>
  )
}

export default Count
