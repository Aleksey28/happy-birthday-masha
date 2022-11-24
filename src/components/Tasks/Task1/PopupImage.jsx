import styles from './PopupImage.module.css';

function PopupImage({ image, visible, onClose }) {
  return (
    <div className={`${styles.popup} ${visible ? styles.opened : ''}`}>
      <img src={image} className={styles.image} alt="Попочки под увеличением" />
      <button className={styles.button} onClick={onClose}></button>
    </div>
  );
}

export default PopupImage;
