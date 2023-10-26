import { useEffect, useRef } from "react";
import Image from "next/image";
import { images } from './imagesArray';
import styles from './projects.module.scss';

const Projects = () => {
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const scrollSectionRef = useRef<HTMLDivElement | null>(null);

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
    const stickyElement = stickyRef.current;
    const scrollSectionElement = scrollSectionRef.current;

    if (stickyElement && scrollSectionElement) {
      const offsetTop = stickyElement.parentElement?.offsetTop || 0;
      let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
      percentage = Math.min(Math.max(percentage, 0), 232);
      scrollSectionElement.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`;
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