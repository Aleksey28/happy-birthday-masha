import heartImage from './heart.png'
import styles from './Heart.module.css';

function Heart({top = 0, left = 0}) {
  return (
    <img src={heartImage} className={styles.heart} style={{top: top + 'px', left: left + 'px'}} alt="Сердечко" />
  )
}

export default Heart
