import NextButton from '../../NextButton/NextButton';
import Header from '../Header/Header';
import containerStyles from '../Container.module.css';
import styles from './Task.module.css';
import nextPreview from './images/next-preview.jpg';
import failImage from '../images/fail-image-1.jpg';
import successImage from '../images/success-image-1.jpg';
import popupBtnEmoji from './images/popup-btn-emoji.png';
import resultEmoji from './images/result-emoji.png';
import mainImage from './images/main.png';
import Popup from '../Popup/Popup';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import accompaniment from '../../../sounds/track-task-3.mp3';
import { useRef } from 'react';

const headerProps = {
  title: 'Задание №3',
  description: 'Следующее пожелание мы зашифровали в ребусе.',
}

const successPopupProps = {
  image: successImage,
  title: 'Правильно!',
  description: 'Проводи больше времени за любимыми занятиями!',
  buttonText: 'Как мило',
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

const rightAnswer = '^желаем не работать в огороде$';

function Task() {
  const refPlayer = useRef(null);
  const [answer, setAnswer] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  function handleClickNext() {
    setShowPopup(true);
  }

  function handleChangeInput(e) {
    setAnswer(e.target.value);
  }

  function handleSubmitPopup() {
    setShowPopup(false);
    if (validAnswer())
      navigate("/task-4");
  }

  function validAnswer() {
    const formattedAnswer = answer
      .replaceAll(/[ёЁ]/g, 'е')
      .replaceAll(/[^а-яА-ЯйЙa-zA-Z ]/g, '')
      .replaceAll(/\s+/g, ' ')
      .trim()
      .toLowerCase();

    return new RegExp(rightAnswer.toLowerCase()).test(formattedAnswer);
  }

  function getPopupProps() {
    if (validAnswer())
      return successPopupProps;

    return failPopupProps;
  }

  return (
    <div className={containerStyles.container}>
            <audio ref={refPlayer} onLoadedMetadata={() => refPlayer.current.play()}>
        <source src={accompaniment} type="audio/mpeg" />
      </audio>
      <Header {...headerProps} />
      <div className={styles.task}>
        <img src={mainImage} className={styles.rebus} alt="Слабо?" />
        <div className={styles.result}>
          <div className={styles.resultTitle}>
            <img src={resultEmoji} className={styles.resultTitleEmoji} alt="Ух" />
            <p className={styles.resultTitleText}>Так неожиданно и приятнооо!  Мой ответ:</p>
          </div>
          <input type="text" className={styles.resultInput} value={answer} onChange={handleChangeInput} />
        </div>
      </div>
      <NextButton text={'Готово'} onClick={handleClickNext} image={nextPreview} />
      <Popup {...getPopupProps()} visible={showPopup} onSubmit={handleSubmitPopup} />
    </div>
  );
}

export default Task;
