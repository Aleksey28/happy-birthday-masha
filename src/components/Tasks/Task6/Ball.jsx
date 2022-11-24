import { useEffect, useState } from 'react';
import classes from './Ball.module.css';

function Ball({id, top, left, angle, speed = 10, step = 1, size, bounds, handleClickOnBall }) {
  const [positionState, setPositionState] = useState({ top, left, angle })
  const [intervalState, setIntervalState] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPositionState((prev) => {
        let angle = prev.angle;
        let radians = angle * (Math.PI / 180);
        let left = prev.left + step * Math.cos(radians);
        let top = prev.top + step * Math.sin(radians);

        if (top + size.height > bounds.bottom || top < bounds.top) {
          angle = -angle;
          radians = angle * (Math.PI / 180);
          left = prev.left + step * Math.cos(radians);
          top = prev.top + step * Math.sin(radians);
        }

        if (left + size.width > bounds.right || left < bounds.left) {
          angle = 180 - angle;
          radians = angle * (Math.PI / 180);
          left = prev.left + step * Math.cos(radians);
          top = prev.top + step * Math.sin(radians);
        }

        return { top, left, angle }
      })
    }, speed);

    setIntervalState(interval);
  }, [size, bounds, speed, step]);

  function handleClick () {
    clearInterval(intervalState);
    handleClickOnBall(id);
  }

  return (
    <img src="https://js.cx/clipart/ball.svg" className={classes.ball} 
    onMouseDown={handleClick}
    onDragStart={(e) => e.preventDefault()}
    style={{ 
      width: size.width + 'px',
      height: size.height + 'px',
      top: positionState.top + 'px', 
      left: positionState.left + 'px' 
    }} alt="Ball" />
  );
}

export default Ball;
