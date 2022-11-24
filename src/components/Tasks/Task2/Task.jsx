import NextButton from '../../NextButton/NextButton';
import Header from '../Header/Header';
import containerStyles from '../Container.module.css';
import styles from './Task.module.css';
import nextPreview from './images/next-preview.jpg';
import failImage from '../images/fail-image-2.jpg';
import successImage from '../images/success-image-2.jpg';
import popupBtnEmoji from './images/popup-btn-emoji.png';
import Popup from '../Popup/Popup';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import videoLesha from './images/lesha.mp4';
import videoSasha from './images/sasha.mp4';
import accompaniment from '../../../sounds/track-task-1.mp3';
import { useRef } from 'react';

const headerProps = {
  title: 'Задание №2',
  description: 'Прочитай послание по губам.',
}

const successPopupProps = {
  image: successImage,
  title: 'Получилось!',
  description: 'Желаем как можно больше magic moments',
  buttonText: 'Хорошо',
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

const rightAnswer = '^стрелки крутятся все быстрей стали звезды на год взрослей лист сорвался с календаря но не стоит грустить зря$';

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
      navigate("/task-3");
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
        <div className={styles.videoContainer}>
          <video src={videoLesha} className={styles.video} autoPlay muted loop />
          <video src={videoSasha} className={styles.video} autoPlay muted loop />
        </div>
        <p className={styles.resultTitle}>Спасибо, что не по глазам... мой ответ:</p>
        <textarea type="text" className={styles.resultInput} value={answer} onChange={handleChangeInput} />
      </div>
      <NextButton text={'Готово'} onClick={handleClickNext} image={nextPreview} />
      <Popup {...getPopupProps()} visible={showPopup} onSubmit={handleSubmitPopup} />
    </div>
  );
}

export default Task;
