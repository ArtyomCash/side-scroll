import Header from '../Header';
import styles from './globalWrapper.module.scss';

const GlobalWrapper = ({ children }) => {
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
        <div className={styles.sticky}>
          <div className={styles.scroll_section} />
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

      <div className={styles.sticky_parent}>
        <div className={styles.sticky}>
          <div className={styles.scroll_section} />
        </div>
      </div>

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
