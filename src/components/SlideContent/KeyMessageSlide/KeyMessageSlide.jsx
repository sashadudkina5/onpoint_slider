import styles from "./styles.module.css";
import productData from "../../../utils/product-data.json";
import Decoration from "./Decoration";
import { useState } from "react";
import DetailModal from "../DetailModal/DetailModal";
import { useRef, useEffect } from "react";

function KeyMessageSlide() {
  const modalOpenButtonRef = useRef(null);
  const titleTextRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const titleTextElement = titleTextRef.current;
    if (titleTextElement) {
      const titleTexts = titleTextElement.querySelectorAll(
        `.${styles.keyMessageSlide__title_text}`
      );

      titleTexts.forEach((textElement, index) => {
        if (isModalOpen && index === 0) {
          textElement.classList.add(styles.visible);
          textElement.classList.remove(styles.hidden);
        } else if (!isModalOpen && index === 1) {
          textElement.classList.add(styles.visible);
          textElement.classList.remove(styles.hidden);
        } else {
          textElement.classList.add(styles.hidden);
          textElement.classList.remove(styles.visible);
        }
      });
    }
  }, [isModalOpen]);

  useEffect(() => {
    const openModal = () => setIsModalOpen(true);

    const modalOpenButton = modalOpenButtonRef.current;

    if (modalOpenButton) {
      modalOpenButton.addEventListener("click", openModal);
    }

    return () => {
      if (modalOpenButton) {
        modalOpenButton.removeEventListener("click", openModal);
      }
    };
  }, []);

  return (
    <section className={styles.keyMessageSlide}>
      {isModalOpen && (
        <div className={styles.keyMessageSlide__modal_overlay}></div>
      )}

      <div className={styles.keyMessageSlide__key_info}>
        <p className={styles.keyMessageSlide__title} ref={titleTextRef}>
          <span className={styles.keyMessageSlide__title_text}>
            Преимущества
          </span>
          <span className={styles.keyMessageSlide__title_text}>
            Ключевое сообщение
          </span>
        </p>

        <p className={styles.keyMessageSlide__brand}>
          BREND<strong>XY</strong>
        </p>
      </div>

      <div className={styles.keyMessageSlide__advantages}>
        <div
          className={`${styles.keyMessageSlide__advantage_item} ${styles.keyMessageSlide__advantage_item_calendar}`}
        >
          {productData.product.advantages.firstAdvantage}
        </div>

        <div
          className={`${styles.keyMessageSlide__advantage_item} ${styles.keyMessageSlide__advantage_item_food}`}
        >
          {productData.product.advantages.secondAdvantage}
        </div>

        <button
          className={styles.keyMessageSlide__button}
          ref={modalOpenButtonRef}
        >
          <p className={styles.keyMessageSlide__buttonText}>Подробнее</p>
        </button>
      </div>

      {isModalOpen && <DetailModal closeModal={() => setIsModalOpen(false)} />}
      <Decoration />
    </section>
  );
}

export default KeyMessageSlide;
