import { useEffect, useState } from 'react';
import classes from './Ball.module.css';

function Ball({ top, left, angle, speed = 10, size, bounds, handleClickOnBall }) {
  const [positionState, setPositionState] = useState({ top, left, angle })
  const [visibleState, setVisibleState] = useState(true);
  const [intervalState, setIntervalState] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPositionState((prev) => {
        let angle = prev.angle;
        let radians = angle * (Math.PI / 180);
        let left = prev.left + 1 * Math.cos(radians);
        let top = prev.top + 1 * Math.sin(radians);

        if (top + size.height > bounds.bottom || top < bounds.top) {
          angle = -angle;
          radians = angle * (Math.PI / 180);
          left = prev.left + 1 * Math.cos(radians);
          top = prev.top + 1 * Math.sin(radians);
        }

        if (left + size.width > bounds.right || left < bounds.left) {
          angle = 180 - angle;
          radians = angle * (Math.PI / 180);
          left = prev.left + 1 * Math.cos(radians);
          top = prev.top + 1 * Math.sin(radians);
        }

        return { top, left, angle }
      })
    }, speed);

    setIntervalState(interval);

    setTimeout(() => clearInterval(interval), 10000);
  }, [size, bounds, speed]);

  function handleClick () {
    setVisibleState(false);
    clearInterval(intervalState);
    handleClickOnBall();
  }

  return (
    <img src="https://js.cx/clipart/ball.svg" className={classes.ball} 
    onClick={handleClick}
    style={{ 
      width: size.width + 'px',
      height: size.height + 'px',
      top: positionState.top + 'px', 
      left: positionState.left + 'px' 
    }} alt="Ball" />
  );
}

export default Ball;
