import { smoothScroll } from '../../utils/smoothScroll'
import styles from './header.module.scss';
import {useEffect, useRef} from "react";

const Header = () => {
  // const teamRef = useRef(null);
/*  const smoothScroll = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      // window.scrollBy(0, el.getBoundingClientRect().top - 100);
      const top = el.getBoundingClientRect().top;
      window.scrollBy({ top, behavior: 'smooth' });
    }
  };*/
  /*useEffect(() => {
    if (typeof window !== 'undefined') {
      smoothScroll('team', 1000, 150);
    }
  }, []);*/


 return (
   <header className={styles.header}>
     <button className={styles.btn} type='button' >About</button>
     {/*<button className={styles.btn} type='button' onClick={() => { if (teamRef.current) {
       smoothScroll('team', 1000, 150);
     }}}
     >
       Team
     </button>*/}
     <button className={styles.btn} type='button' onClick={() => smoothScroll('team', 1000, 150)}>Team</button>
     <button className={styles.btn} type='button'>Projects</button>
     <button className={styles.btn} type='button'>Contacts</button>
   </header>
 );
};

export default Header;
