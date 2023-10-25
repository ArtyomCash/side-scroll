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
      <section className={styles.sectionAbout}>
        <h1 className={styles.title}>About Us</h1>
        {[...Array(30)].map((_, index) => (
          <p key={index} className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur blanditiis doloremque in ipsum
            molestiae nihil placeat praesentium saepe sint veniam! Ad adipisci cumque deserunt earum enim exercitationem
            facilis soluta, ut.
          </p>
        ))}
      </section>
      <section className={styles.sectionTeam}>
        <h1 className={styles.title}>Team</h1>
        {[...Array(15)].map((_, index) => (
          <p key={index} className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur blanditiis doloremque in ipsum
            molestiae nihil placeat praesentium saepe sint veniam! Ad adipisci cumque deserunt earum enim exercitationem
            facilis soluta, ut.
          </p>
        ))}
      </section>
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
      <section className={styles.sectionTeam}>
        <h1 className={styles.title}>Contact</h1>
        {[...Array(15)].map((_, index) => (
          <p key={index} className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur blanditiis doloremque in ipsum
            molestiae nihil placeat praesentium saepe sint veniam! Ad adipisci cumque deserunt earum enim exercitationem
            facilis soluta, ut.
          </p>
        ))}
      </section>
      {children}
    </>
  );
};

export default GlobalWrapper;
