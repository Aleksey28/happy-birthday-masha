import ArrowRight from './ArrowRight';
import styles from './NextButton.module.css';

function NextButton({ text, image, large, onClick }) {
  return (
    <div className={styles.nextButton}>
      {image && (<img src={image} className={styles.image} alt="Картинка" />)}
      <button className={`${styles.button} ${large ? styles.buttonLarge : ''}`} onClick={onClick}>
        <span className={styles.text}>{text}</span>
        <ArrowRight />
      </button>
    </div>
  );
}

export default NextButton;
