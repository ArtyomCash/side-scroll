import Header from '../Header';
import Image from "next/image";
import { useEffect, useRef } from 'react';
import styles from './globalWrapper.module.scss';

const GlobalWrapper = ({ children }) => {
  const stickyRef = useRef(null);
  const scrollSectionRef = useRef(null);

  const images = [
    '/car.jpg',
    '/forest.jpg',
    '/house.jpg'
  ];

  useEffect(() => {
    const handleScroll = () => {
      transform();
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function transform() {
    if (stickyRef.current.parentElement) {
      const offsetTop = stickyRef.current.parentElement.offsetTop;
      const scrollSection = scrollSectionRef.current;
      if (scrollSection) {
        let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
        percentage = percentage < 0 ? 0 : percentage > 135 ? 135 : percentage;
        scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`;
      }
    }
  }

  return (
    <>
      <Header />
      {children}
      <section className={styles.sectionProjects}>
        <div ref={stickyRef} className={styles.sticky}>
          <h1 className={styles.title}>Projects</h1>
          <div ref={scrollSectionRef} className={styles.scrollSection}>
            {images.map((imgSrc, index) => (
              <Image
                key={index}
                src={imgSrc}
                alt="Image Alt Text"
                className={styles.img}
                width={1160}
                height={578}
                priority
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GlobalWrapper;
