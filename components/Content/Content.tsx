import { NextPage } from 'next/types';
import styles from './about.module.scss';
import { IContentProps } from './types';

const Content: NextPage<IContentProps> = ({ title, numParagraphs, id }) => {
  return (
    <section className={styles.sectionAbout}>
      <h1 className={styles.title} id={id}>{title}</h1>
      {[...Array(numParagraphs)].map((_, index) => (
        <p key={index} className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Aspernatur blanditiis doloremque in ipsum molestiae nihil placeat praesentium saepe sint veniam!
          Ad adipisci cumque deserunt earum enim exercitationem facilis soluta, ut.
        </p>
      ))}
    </section>
  )
};

export default Content;