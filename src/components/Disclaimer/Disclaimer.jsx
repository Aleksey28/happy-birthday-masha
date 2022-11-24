import styles from './Disclaimer.module.css';
import NextButton from '../NextButton/NextButton';
import startImage from './images/star.png';
import nextPreview from './images/next-preview.png';
import { useNavigate } from 'react-router-dom';

function Disclaimer() {
  const navigate = useNavigate();

  function handleClickNext() {
    navigate("/task-1");
  }

  return (
    <div className={styles.disclaimer}>
      <div className={styles.title}>
        <img src={startImage} className={styles.star} alt="Звездочка" />
        <h2 className={styles.titleText}>ВНИМАНИЕ</h2>
        <img src={startImage} className={styles.star} alt="Звездочка" />
      </div>
      <NextButton text={'Я поняла'} onClick={handleClickNext} image={nextPreview} />
      <p className={styles.description}>Далее будет представлено IT творчество, направленное на учучшение настроения именинницы, далее именуемой, Машульки.</p>
      <p className={styles.description}>На выполнение следующих заданий уйдет от 5 до ∞ минут. Поэтому нужно устроиться поудобнее и быть готовой кринжануть.</p>
    </div>
  );
}

export default Disclaimer;
