import { useNavigate } from 'react-router';
import styles from './Start.module.css';
import emoji from './emoji.png';

function Start() {

  const navigate = useNavigate();

  function handleClickNext() {
    navigate("/intro");
  }

  return (
    <div className={styles.start}>
      <button className={styles.btn} onClick={handleClickNext}>BAMPS!</button>
      <img src={emoji} className={styles.emoji} alt="" />
    </div>
  );
}

export default Start;
