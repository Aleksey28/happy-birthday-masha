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
import udmImage from './images/udm.png';
import amImage from './images/am.png';
import amPuzzle from './images/am-puzzle.png';
import testString from '../../../utils/compare-strings';
import accompaniment from '../../../sounds/track-task-6.mp3';
import { useRef } from 'react';

const headerProps = {
  title: 'Задание №6',
  description: 'Отгадай удмуртскую и армянскую загадки.',
}

const successPopupProps = {
  image: successImage,
  title: 'Супер-пупер!',
  description: 'Смотри иногда на мир под другим углом',
  buttonText: 'Буду!',
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

const rightAnswers = {
  udm: 'груд',
  am: 'сердце',
};

function Task() {
  const refPlayer = useRef(null);
  const [popupWasOpened, setPopupeWasOpend] = useState(false);
  const [answers, setAnswers] = useState({ udm: '', am: '' });
  // const [errors, setErrors] = useState({ udm: false, am: false })
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  function handleClickNext() {
    setShowPopup(true);
  }

  function handleChangeInput(e, key) {
    setAnswers((prev) => ({ ...prev, [key]: e.target.value }));
  }

  function handleSubmitPopup() {
    setPopupeWasOpend(true);
    setShowPopup(false);
    if (validAnswer())
      navigate("/happy-end");
  }

  function validAnswer() {
    const errors = {
      udm: !testString(rightAnswers.udm, answers.udm),
      am: !testString(rightAnswers.am, answers.am),
    };

    return !errors.am && !errors.udm;
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
        <div className={styles.puzzle}>
          <img src={udmImage} className={styles.puzzleImage} alt="Молоток чувак" />
          <div className={styles.puzzleTextContainer}>
            <p className={styles.puzzleText}>Со котькуд кӧт,
              нош ӝӧк вылэ поныны уг яра.</p>
            <p className={styles.puzzleText}>Каждый ими питается,
              а на стол положить нельзя.</p>
          </div>
          <div className={styles.puzzleResultContainer}>
            <p className={styles.puzzleResultText}>Я знаю, ведь это очень легко, как ван, ту, сри:</p>
            <input type="text" className={`${styles.puzzleResultInput} ${popupWasOpened && !testString(rightAnswers.udm, answers.udm) ? styles.puzzleResultInputError : ''}`} value={answers.udm} onChange={(e) => handleChangeInput(e, 'udm')} />
          </div>
        </div>
        <div className={styles.puzzle}>
          <img src={amImage} className={styles.puzzleImage} alt="Молоток чувак" />
          <div className={styles.puzzleTextContainer}>
            <img src={amPuzzle} alt="Патамушта у шрифта нет такого языка рррррр" />
            <p className={styles.puzzleText}>Есть машина,
              которая цены не имеет,
              но каждый ею владеет.</p>
          </div>
          <div className={styles.puzzleResultContainer}>
            <p className={styles.puzzleResultText}>Ну Леон точно поможет расколоть этот орешек:</p>
            <input type="text" className={`${styles.puzzleResultInput} ${popupWasOpened && !testString(rightAnswers.am, answers.am) ? styles.puzzleResultInputError : ''}`} value={answers.am} onChange={(e) => handleChangeInput(e, 'am')} />
          </div>
        </div>
      </div>
      <NextButton text={'Готово'} onClick={handleClickNext} image={nextPreview} />
      <Popup {...getPopupProps()} visible={showPopup} onSubmit={handleSubmitPopup} />
    </div>
  );
}

export default Task;
