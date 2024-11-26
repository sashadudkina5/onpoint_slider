import styles from "./decorations.module.css";
import productImage from "../../../assets/bottle-image.png";

function Decoration() {
  return (
    <aside>
      <div className={styles.keyMessageSlide__decoration}>
        <img src={productImage} alt="Изображение упаковки" />

        <span
          className={`${styles.keyMessageSlide__bubble} ${styles.keyMessageSlide__bubble_1}`}
        ></span>
        <span
          className={`${styles.keyMessageSlide__bubble} ${styles.keyMessageSlide__bubble_2}`}
        ></span>
        <span
          className={`${styles.keyMessageSlide__bubble} ${styles.keyMessageSlide__bubble_3}`}
        ></span>
        <span
          className={`${styles.keyMessageSlide__bubble} ${styles.keyMessageSlide__bubble_4}`}
        ></span>
        <span
          className={`${styles.keyMessageSlide__bubble} ${styles.keyMessageSlide__bubble_5}`}
        ></span>
        <span
          className={`${styles.keyMessageSlide__bubble} ${styles.keyMessageSlide__bubble_6}`}
        ></span>
        <span
          className={`${styles.keyMessageSlide__bubble} ${styles.keyMessageSlide__bubble_7}`}
        ></span>
        <span
          className={`${styles.keyMessageSlide__bubble} ${styles.keyMessageSlide__bubble_8}`}
        ></span>
      </div>
    </aside>
  );
}

export default Decoration;
