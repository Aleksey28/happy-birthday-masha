import ArrowRight from './ArrowRight';
import styles from './NextButton.module.css';

function NextButton({ text, image, onClick }) {
  return (
    <div className={styles.nextButton}>
      {image && (<img src={image} className={styles.image} alt="Картинка" />)}
      <button className={styles.button} onClick={onClick}>
        <span className={styles.text}>{text}</span>
        <ArrowRight />
      </button>
    </div>
  );
}

export default NextButton;
