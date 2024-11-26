import styles from "./decorations.module.css";

function Decoration() {
  return (
    <aside className={styles.helloSlideDecor__container}>
      <span
        className={`${styles.helloSlideDecor__img} ${styles.helloSlideDecor__img_bacteria1}`}
      ></span>
      <span
        className={`${styles.helloSlideDecor__img} ${styles.helloSlideDecor__img_bacteria2}`}
      ></span>
      <span
        className={`${styles.helloSlideDecor__img} ${styles.helloSlideDecor__img_bacteria_transparent}`}
      ></span>
      <span
        className={`${styles.helloSlideDecor__img} ${styles.helloSlideDecor__img_bacteria_transparent2}`}
      ></span>
      <span
        className={`${styles.helloSlideDecor__img} ${styles.helloSlideDecor__img_bacteria_big}`}
      ></span>
      <span
        className={`${styles.helloSlideDecor__img} ${styles.helloSlideDecor__img_bacteria_long}`}
      ></span>
      <span
        className={`${styles.helloSlideDecor__img} ${styles.helloSlideDecor__img_bacteria_spike}`}
      ></span>
      <span
        className={`${styles.helloSlideDecor__img} ${styles.helloSlideDecor__img_pink_sperm_visible}`}
      ></span>
      <span
        className={`${styles.helloSlideDecor__img} ${styles.helloSlideDecor__img_pink_sperm}`}
      ></span>
    </aside>
  );
}

export default Decoration;
