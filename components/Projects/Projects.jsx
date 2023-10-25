import styles from './projects.module.scss';
import {useEffect, useRef} from "react";
import Image from "next/image";

const Projects = () => {
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
        percentage = percentage < 0 ? 0 : percentage > 232 ? 232 : percentage;
        scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`;
      }
    }
  }

  return (
    <section className={styles.sectionProjects}>
      <div ref={stickyRef} className={styles.sticky}>
        <div ref={scrollSectionRef} className={styles.scrollSection}>
          <h1 className={styles.title} id='projects'>Projects</h1>
          <article className={styles.scrollSectionContainer}>
            {images.map((imgSrc, index) => (
              <Image
                key={index}
                src={imgSrc}
                alt="Image Alt Text"
                className={styles.img}
                width={1920}
                height={750}
                priority
              />
            ))}
          </article>
        </div>
      </div>
    </section>
  )
};

export default Projects;