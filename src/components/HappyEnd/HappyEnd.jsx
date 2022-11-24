import styles from './HappyEnd.module.css';
import startImage from './images/star.png';
import commonPhoto from './images/common-photo.jpg';
import accompaniment from '../../sounds/track-happy-end.mp3';
import { useRef } from 'react';

function HappyEnd() {
  const refPlayer = useRef(null);

  return (
    <div className={styles.happyEnd}>
      <audio ref={refPlayer} loop onLoadedMetadata={() => refPlayer.current.play()}>
        <source src={accompaniment} type="audio/mpeg" />
      </audio>
      <div className={styles.title}>
        <img src={startImage} className={styles.star} alt="Звездочка" />
        <h2 className={styles.titleText}>Ура-а-а!!!</h2>
        <img src={startImage} className={styles.star} alt="Звездочка" />
      </div>
      <p className={styles.description}>Ты с успехом справилась со всеми испытаниями!</p>
      <p className={styles.description}>Машуля, мы тебя очень любим и ценим! И мы очень-очень рады, что у нас есть такая умная, добрая, красивая подруга, которая всегда поддержит и придет напомощь!</p>
      <img src={commonPhoto} className={styles.commonPhoto} alt="Это типа мы катаемся на катамаранах, выезжаем за буйки и стараемся не потонуть)" />
      <p className={styles.signature}>С обожанием от Саши и Леши.</p>
    </div>
  );
}

export default HappyEnd;
