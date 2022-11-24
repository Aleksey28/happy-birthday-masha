import styles from './Popup.module.css';
import successIcon from './images/success-icon.svg';
import failIcon from './images/fail-icon.svg';


function Popup({ image, title, description, buttonText, buttonEmoji, success, visible, onSubmit }) {
  return (
    <div className={`${styles.popup} ${visible ? styles.opened : ''}`}>
      <div className={styles.container}>
        <img src={image} className={styles.image} alt="Что-то с чем-то" />
        <div className={styles.title}>
          <img src={success ? successIcon : failIcon} className={styles.titleIcon} alt="Что-то с чем-то" />
          <p className={styles.titleText}>{title}</p>
        </div>
        <p className={styles.description}>{description}</p>
        <button className={styles.button} onClick={onSubmit}>{buttonText} &nbsp; {buttonEmoji ? <img src={buttonEmoji} className={styles.buttonEmoji} alt='Эмоджа'/> : ''}</button>
      </div>
    </div>
  );
}

export default Popup;
