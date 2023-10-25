import { smoothScroll } from '../../utils/smoothScroll';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <button className={styles.btn} type='button'>
        About
      </button>
      <button className={styles.btn} type='button' onClick={() =>
        smoothScroll('team', 1000, 100)}
      >
        Team
      </button>
      <button className={styles.btn} type='button' onClick={() =>
        smoothScroll('projects', 1000, 10)}
      >
        Projects
      </button>
      <button className={styles.btn} type='button' onClick={() =>
        smoothScroll('contacts', 1500, 10)}
      >
        Contacts
      </button>
    </header>
  );
};

export default Header;
