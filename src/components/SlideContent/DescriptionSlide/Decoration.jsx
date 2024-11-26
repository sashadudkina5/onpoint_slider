import styles from "./decorations.module.css";

function Decoration({ keyTrigger }) {
  return (
    <aside key={keyTrigger} className={styles.spermSlide__container}>
      <span
        className={`${styles.spermSlide__sperm_cell} ${styles.spermSlide__sperm_cell_1}`}
      ></span>
      <span
        className={`${styles.spermSlide__sperm_cell} ${styles.spermSlide__sperm_cell_2}`}
      ></span>
      <span
        className={`${styles.spermSlide__sperm_cell} ${styles.spermSlide__sperm_cell_3}`}
      ></span>
      <span
        className={`${styles.spermSlide__sperm_cell} ${styles.spermSlide__sperm_cell_4}`}
      ></span>
      <span
        className={`${styles.spermSlide__sperm_cell} ${styles.spermSlide__sperm_cell_5}`}
      ></span>
    </aside>
  );
}

export default Decoration;
