import NextButton from '../../NextButton/NextButton';
import Header from '../Header/Header';
import containerStyles from '../Container.module.css';
import styles from './Task.module.css';
import failImage from '../images/fail-image-1.jpg';
import successImage from '../images/success-image-1.jpg';
import popupBtnEmoji from './images/popup-btn-emoji.png';
import Popup from '../Popup/Popup';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Ball from './Ball';
import accompaniment from '../../../sounds/track-task-5.mp3';
import { useRef } from 'react';

const headerProps = {
  title: 'Задание №6',
  description: 'Настоящий волейболист поймает все 23 мяча!',
}

const successPopupProps = {
  image: successImage,
  title: 'Супер!',
  description: 'Желаем поддерживать себя в форме и достигать целей!',
  buttonText: 'Ну спасибо',
  buttonEmoji: popupBtnEmoji,
  success: true,
}

const failPopupProps = {
  image: failImage,
  title: 'Не правильно!',
  description: 'Попробуй еще раз',
  buttonText: 'Черт!',
  success: false,
}

const bounds = {
  top: 0,
  left: 0,
  bottom: window.innerHeight,
  right: window.innerWidth,
}

const ballSize = {
  width: 40,
  height: 40,
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function Task() {
  const refPlayer = useRef(null);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const [ballsCount, setBallsCount] = useState(10);
  const [balls, setBalls] = useState([]);

  useEffect(() => {
    const initBallsCount = 23;
    const initBalls = [];

    for (let index = 0; index < initBallsCount; index++) {
      initBalls.push({
        id: uuidv4(),
        top: getRandomArbitrary(bounds.top + 1, bounds.bottom - ballSize.height - 1),
        left: getRandomArbitrary(bounds.left + 1, bounds.right - ballSize.width - 1),
        angle: getRandomArbitrary(10, 80),
        speed: getRandomArbitrary(1, 3),
        step: getRandomArbitrary(1, 3)
      });
    }

    setBalls(initBalls);
    setBallsCount(initBallsCount);
  }, [])

  function handleClickNext() {
    setShowPopup(true);
  }

  function handleClickOnBall(id) {
    setBallsCount(ballsCount - 1);
    setBalls(balls.filter(ball => ball.id !== id));
  }

  function handleSubmitPopup() {
    setShowPopup(false);
    if (ballsCount <= 0)
      navigate("/task-6");
  }

  function getPopupProps() {
    if (ballsCount <= 0)
      return successPopupProps;

    return failPopupProps;
  }

  return (
    <div className={`${containerStyles.container} ${styles.field}`}>
            <audio ref={refPlayer} onLoadedMetadata={() => refPlayer.current.play()}>
        <source src={accompaniment} type="audio/mpeg" />
      </audio>
      <NextButton text={'Готово'} onClick={handleClickNext} />
      <Header {...headerProps} />
      <div className="CatchBall">
        {
          balls.map((item) => <Ball
            key={item.id}
            id={item.id}
            top={item.top}
            left={item.left}
            angle={item.angle}
            speed={item.speed}
            step={item.step}
            bounds={bounds}
            size={ballSize}
            handleClickOnBall={handleClickOnBall} />)
        }
      </div>
      
      <Popup {...getPopupProps()} visible={showPopup} onSubmit={handleSubmitPopup} />
    </div>
  );
}

export default Task;
