import styles from './Intro.module.css';
import titleImage from './images/title.png';
import mashaImage from './images/masha.png';
import NextButton from '../NextButton/NextButton';
import Heart from '../Heart/Heart';
import { useNavigate } from "react-router-dom";
import accompaniment from '../../sounds/track-intro.mp3';
import { useRef } from 'react';

const hearts = [
  { top: 192, left: 168 },
  { top: 531, left: 322 },
  { top: 837, left: 118 },
  { top: 167, left: 1516 },
  { top: 616, left: 1664 },
];

function Intro() {
  const refPlayer = useRef(null);
  const navigate = useNavigate();

  function handleClickNext() {
    navigate("/disclaimer");
  }

  return (
    <div className={styles.start}>
      <audio ref={refPlayer} onLoadedMetadata={() => refPlayer.current.play()}>
        <source src={accompaniment} type="audio/mpeg" />
      </audio>
      <img src={titleImage} className={styles.title} alt='С днем рождения симпапулька!' />
      <h2 className={styles.happyBirthday}>С Днем рождения, бусинка моя!</h2>
      <img src={mashaImage} className={styles.masha} alt='Это симпапулька!' />
      <p className={styles.day}>24 ноября 2022</p>
      <p className={styles.bestDay}>Самыйлучший день в году!</p>
      <NextButton text={'УРА!'} onClick={handleClickNext} />

      {hearts.map((heartProps, index) => <Heart key={index} {...heartProps} />)}
    </div>
  );
}

export default Intro;
