import Header from '../Header';
import styles from './globalWrapper.module.scss';
import Image from "next/image";
import { useEffect, useRef } from 'react';

const GlobalWrapper = ({ children }) => {
  const stickyRef = useRef(null);
  const scrollSectionRef = useRef(null);

  const images = [
    '/car.jpg',
    '/car2.jpeg',
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
    const offsetTop = stickyRef.current.parentElement.offsetTop;
    const scrollSection = scrollSectionRef.current;
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
    scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`;
  }

  return (
    <>
      <Header />
      <section className={styles.section}>
        <div className={styles.container}>
          <h1>Hybrid Scroll</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur blanditiis doloremque in ipsum
            molestiae nihil placeat praesentium saepe sint veniam! Ad adipisci cumque deserunt earum enim exercitationem
            facilis soluta, ut.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur blanditiis doloremque in ipsum
            molestiae nihil placeat praesentium saepe sint veniam! Ad adipisci cumque deserunt earum enim exercitationem
            facilis soluta, ut.</p>
        </div>
      </section>

      <div className={styles.sticky_parent}>
        <div ref={stickyRef} className={styles.sticky}>
          <div ref={scrollSectionRef} className={styles.scroll_section}>
            {images.map((imgSrc, index) => (
              <Image
                key={index}
                src={imgSrc}
                alt="Image Alt Text"
                className={styles.img}
                width={1024}
                height={578}
                priority
              />
            ))}
          </div>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          <h1>About</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur blanditiis doloremque in ipsum
            molestiae nihil placeat praesentium saepe sint veniam! Ad adipisci cumque deserunt earum enim exercitationem
            facilis soluta, ut.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur blanditiis doloremque in ipsum
            molestiae nihil placeat praesentium saepe sint veniam! Ad adipisci cumque deserunt earum enim exercitationem
            facilis soluta, ut.</p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <h1>End</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur blanditiis doloremque in ipsum
            molestiae nihil placeat praesentium saepe sint veniam! Ad adipisci cumque deserunt earum enim exercitationem
            facilis soluta, ut.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur blanditiis doloremque in ipsum
            molestiae nihil placeat praesentium saepe sint veniam! Ad adipisci cumque deserunt earum enim exercitationem
            facilis soluta, ut.</p>
        </div>
      </section>

      {children}
    </>
  );
};

export default GlobalWrapper;
