import { NextPage } from 'next/types';
import { smoothScroll } from '../../utils/smoothScroll';
import { headerMenu } from './menuArray';
import styles from './header.module.scss';

const Header: NextPage = () => {
  return (
    <header className={styles.header}>
      {headerMenu.map((item, index) => (
        <button
          className={styles.btn}
          key={index}
          type='button'
          onClick={() =>
            smoothScroll(
              `${item.id}`,
              item.animationDuration ?? 1000,
              item.heightFromTop ?? 100
            )
          }>
          {item.name}
        </button>
      ))}
    </header>
  );
};

export default Header;
