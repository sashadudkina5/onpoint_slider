import { useState } from "react";
import styles from "./styles.module.css";
import productData from "../../../utils/product-data.json";
import { useRef, useEffect } from "react";

function DetailModal({ closeModal }) {

  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);


  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [visibleItems, setVisibleItems] = useState(
    productData.product.details.slice(0, itemsPerPage)
  );

  const totalPages = Math.ceil(
    productData.product.details.length / itemsPerPage
  );

  const handlePageChange = (direction) => {
    if (
      (direction === "next" && currentPage < totalPages) ||
      (direction === "prev" && currentPage > 1)
    ) {
      setIsFadingOut(true);
      setTimeout(() => {
        const newPage =
          direction === "next" ? currentPage + 1 : currentPage - 1;
        const newItems = productData.product.details.slice(
          (newPage - 1) * itemsPerPage,
          newPage * itemsPerPage
        );
        setCurrentPage(newPage);
        setVisibleItems(newItems);
        setIsFadingOut(false);
      }, 200);
    }
  };

  useEffect(() => {
    const handlePrevClick = () => handlePageChange("prev");
    const handleNextClick = () => handlePageChange("next");
    const handleCloseClick = () => closeModal();

    const closeButton = closeButtonRef.current;
    const prevButton = prevButtonRef.current;
    const nextButton = nextButtonRef.current;

    closeButton.addEventListener("click", handleCloseClick);
    prevButton.addEventListener("click", handlePrevClick);
    nextButton.addEventListener("click", handleNextClick);

    return () => {
      closeButton.removeEventListener("click", handleCloseClick);
      prevButton.removeEventListener("click", handlePrevClick);
      nextButton.removeEventListener("click", handleNextClick);
    };
  }, [closeModal, currentPage]);

  return (
    <section className={styles.modal} ref={modalRef}>
      <button
        className={styles.modal__close_button}
        ref={closeButtonRef}
      ></button>

      <ol
        className={`${styles.modal__list} ${
          isFadingOut ? styles.modal__list_fade_out : styles.modal__list_fade_in
        }`}
      >
        {visibleItems.map((detail, index) => (
          <li key={index} className={styles.modal__list_item}>
            <span className={styles.modal__list_number}>
              {String((currentPage - 1) * itemsPerPage + index + 1).padStart(
                2,
                "0"
              )}
            </span>
            <p>{detail}</p>
          </li>
        ))}
      </ol>

      <div className={styles.modal__pagination}>
        <button
          className={`${styles.modal__arrow} ${styles.modal__arrow_back}`}
          ref={prevButtonRef}
          disabled={currentPage === 1}
        ></button>
        <div className={styles.modal__dots}>
          {Array.from({ length: totalPages }, (_, i) => (
            <span
              key={i}
              className={`${styles.modal__dot} ${
                currentPage === i + 1 && styles.modal__dot_active
              }`}
            ></span>
          ))}
        </div>
        <button
          className={`${styles.modal__arrow}`}
          ref={nextButtonRef}
          disabled={currentPage === totalPages}
        ></button>
      </div>
    </section>
  );
}

export default DetailModal;
