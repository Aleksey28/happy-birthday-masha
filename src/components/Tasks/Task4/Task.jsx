import NextButton from '../../NextButton/NextButton';
import Header from '../Header/Header';
import containerStyles from '../Container.module.css';
import styles from './Task.module.css';
import nextPreview from './images/next-preview.jpg';
import failImage from '../images/fail-image-2.jpg';
import successImage from '../images/success-image-2.jpg';
import popupBtnEmoji from './images/popup-btn-emoji.png';
import playImage from './images/play.png';
import stopImage from './images/pause.png';
import song from './images/song.mp3';
import Popup from '../Popup/Popup';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import Heart from '../../Heart/Heart';

const headerProps = {
  title: 'Задание №4',
  description: 'Напиши название этой песни.',
}

const successPopupProps = {
  image: successImage,
  title: 'Правильно!',
  description: 'Желаем, чтобы душа пела и просилась в пляс!',
  buttonText: 'Так и есть',
  buttonEmoji: popupBtnEmoji,
  success: true,
}

const failPopupProps = {
  image: failImage,
  title: 'Неправильно!',
  description: 'Попробуй еще раз',
  buttonText: 'Черт!',
  success: false,
}

const rightAnswer = '^у моей девушки день рождения$';

function Task() {
  const refPlayer = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
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
      navigate("/task-5");
  }

  function handleClickPlay() {
    !isPlaying ? refPlayer.current.play() : refPlayer.current.pause();
    setIsPlaying(!isPlaying);
  };

  function handlePlayerEnded() {
    setIsPlaying(!isPlaying);
  };

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
      <Header {...headerProps} />
      <div className={styles.task}>
        <audio
          ref={refPlayer}
          onEnded={handlePlayerEnded}
        >
          <source src={song} type="audio/mpeg" />
        </audio>
        <button type="button" className={styles.player} onClick={handleClickPlay}>
          {isPlaying ? <img src={stopImage} className={styles.playerIcon} alt="Стоп" /> : <img src={playImage} className={styles.playerIcon} alt="Начать" />}
        </button>
        <div className={styles.result}>
          <p className={styles.resultTitle}>Я знаю эту песню:</p>
          <input type="text" className={styles.resultInput} value={answer} onChange={handleChangeInput} />
        </div>
      </div>
      <NextButton text={'Готово'} onClick={handleClickNext} image={nextPreview} />
      <Popup {...getPopupProps()} visible={showPopup} onSubmit={handleSubmitPopup} />
    </div>
  );
}

export default Task;
