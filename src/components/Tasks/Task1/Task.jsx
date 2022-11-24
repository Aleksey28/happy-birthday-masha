import NextButton from '../../NextButton/NextButton';
import Header from '../Header/Header';
import containerStyles from '../Container.module.css';
import styles from './Task.module.css';
import nextPreview from './images/next-preview.jpg';
import failImage from '../images/fail-image-1.jpg';
import successImage from '../images/success-image-1.jpg';
import popupBtnEmoji from './images/popup-btn-emoji.png';
import mainImage from './images/main.jpg';
import Popup from '../Popup/Popup';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import PopupImage from './PopupImage';
import accompaniment from '../../../sounds/track-task-1.mp3';

const headerProps = {
  title: 'Задание №1',
  description: 'Сколько корги ты найдешь в Ижевске?',
}

const successPopupProps = {
  image: successImage,
  title: 'Получилось!',
  description: 'Желаем, что бы у тебя была всегда такая-же привлекательная попка, как у корги!',
  buttonText: 'Спасибо',
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

const rightAnswer = 23;

function Task() {
  const refPlayer = useRef(null);
  const [answer, setAnswer] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [expandImage, setExpandImage] = useState(false);
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
      navigate("/task-2");
  }

  function handleCollapseImage() {
    setExpandImage(false);
  }

  function handleExpandImage() {
    setExpandImage(true);
  }

  function validAnswer() {
    return Number(answer) === rightAnswer;
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
        <div className={styles.imageContainer}>
          <button className={styles.expandBtn} onClick={handleExpandImage} />
          <img src={mainImage} className={styles.corgi} alt="Попочки" />
        </div>
        <div className={styles.result}>
          <p className={styles.resultTitle}>Я очень долго считала, но любимых жопиков я увижу издалека
            <br /><br />
            Поэтому мой ответ:</p>
          <input type="text" className={styles.resultInput} value={answer} onChange={handleChangeInput} />
        </div>
      </div>
      <NextButton text={'Готово'} onClick={handleClickNext} image={nextPreview} />
      <Popup {...getPopupProps()} visible={showPopup} onSubmit={handleSubmitPopup} />
      <PopupImage image={mainImage} visible={expandImage} onClose={handleCollapseImage} />
    </div>
  );
}

export default Task;
