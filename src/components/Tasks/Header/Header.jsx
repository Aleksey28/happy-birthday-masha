import styles from './Header.module.css';

function Header({ title, description }) {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
}

export default Header;
