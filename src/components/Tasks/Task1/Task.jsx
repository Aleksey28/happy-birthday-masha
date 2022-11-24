import NextButton from '../../NextButton/NextButton';
import Header from '../Header/Header';
import containerStyles from '../Container.module.css';
import styles from './Task.module.css';
import nextPreview from '../images/next-preview.png';
import failImage from '../images/fail-image.png';
import popupBtnEmoji from './images/popup-btn-emoji.png';
import mainImage from './images/main.png';
import Popup from '../Popup/Popup';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const headerProps = {
  title: 'Задание №1',
  description: 'Посчитай сколько корги на картинке.',
}

const successPopupProps = {
  image: nextPreview,
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
      navigate("/task-2");
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
      <Header {...headerProps} />
      <div className={styles.task}>
        <img src={mainImage} className={styles.corgi} alt="Попочки" />
        <div className={styles.result}>
          <p className={styles.resultTitle}>Я очень долго считала, но любимых жопиков я увижу издалека
            <br /><br />
            Поэтому мой ответ:</p>
          <input type="text" className={styles.resultInput} value={answer} onChange={handleChangeInput} />
        </div>
      </div>
      <NextButton text={'Готово'} onClick={handleClickNext} image={nextPreview} />
      <Popup {...getPopupProps()} visible={showPopup} onSubmit={handleSubmitPopup} />
    </div>
  );
}

export default Task;
