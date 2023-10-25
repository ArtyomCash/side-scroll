import styles from './header.module.scss';

const Header = () => {
 return (
   <header className={styles.header}>
     <button className={styles.btn} type='button'>about</button>
     <button className={styles.btn} type='button'>Team</button>
     <button className={styles.btn} type='button'>Projects</button>
     <button className={styles.btn} type='button'>Contacts</button>
   </header>
 );
};

export default Header;
