import Ball from './Ball';
import classes from './CatchBall.module.css';

function CatchBall() {
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  const bounds = {
    top: 0,
    left: 0,
    bottom: 600,
    right: 1000,
  }

  const ballSize = {
    width: 40,
    height: 40,
  }

  let ballsCount = 1;
  const balls = [];

  for (let index = 0; index < ballsCount; index++) {
    balls.push({
      top: getRandomArbitrary(bounds.top + 1, bounds.bottom - ballSize.height - 1),
      left: getRandomArbitrary(bounds.left + 1, bounds.right - ballSize.width - 1),
      angle: getRandomArbitrary(10, 80),
      speed: getRandomArbitrary(5, 10),
    });
  }

  function handleClickOnBall() {
    ballsCount--;

    if (ballsCount <= 0) {
      alert('You are winner!');
    }
  }

  return (
    <div className="CatchBall">
      <div className={classes.field}>
        {
          balls.map((item, index) => <Ball
            key={index}
            top={item.top}
            left={item.left}
            angle={item.angle}
            speed={item.speed}
            bounds={bounds}
            size={ballSize}
            handleClickOnBall={handleClickOnBall} />)
        }
      </div>
    </div>
  );
}

export default CatchBall;
