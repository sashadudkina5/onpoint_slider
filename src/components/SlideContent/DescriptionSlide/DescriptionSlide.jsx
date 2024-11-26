import styles from "./styles.module.css";
import productData from "../../../utils/product-data.json";
import Decoration from "./Decoration";
import { useEffect, useRef } from "react";

function DescriptionSlide({ keyTrigger }) {
  const divRef = useRef(null);

  useEffect(() => {
    const divElement = divRef.current;
    if (!divElement) return;

    let isDragging = false;
    let startY;
    let initialScrollTop;

    const startTouchDrag = (e) => {
      isDragging = true;
      startY = e.touches[0].clientY;
      initialScrollTop = divElement.scrollTop;
      e.preventDefault();
    };

    const handleTouchDrag = (e) => {
      if (!isDragging) return;
      const deltaY = e.touches[0].clientY - startY;
      divElement.scrollTop = initialScrollTop + deltaY;
    };

    const stopTouchDrag = () => {
      isDragging = false;
    };

    //  обработчики событий для сенсорных прикосновений на моб устройствах
    divElement.addEventListener("touchstart", startTouchDrag);
    divElement.addEventListener("touchmove", handleTouchDrag);
    divElement.addEventListener("touchend", stopTouchDrag);

    const updateScrollbarStyle = () => {
      const scrollTop = divElement.scrollTop;
      const scrollHeight = divElement.scrollHeight;
      const clientHeight = divElement.clientHeight;

      const maxScroll = scrollHeight - clientHeight;
      const scrollPercentage = scrollTop / maxScroll;

      const thumbPosition = scrollPercentage * 100;

      divElement.style.setProperty(
        "--thumb-position",
        `center ${thumbPosition}%`
      );
    };

    divElement.addEventListener("scroll", updateScrollbarStyle);
    updateScrollbarStyle();

    return () => {
      divElement.removeEventListener("touchstart", startTouchDrag);
      divElement.removeEventListener("touchmove", handleTouchDrag);
      divElement.removeEventListener("touchend", stopTouchDrag);

      divElement.removeEventListener("scroll", updateScrollbarStyle);
    };
  }, []);

  return (
    <section className={styles.descriptionSlide}>
      <p className={styles.descriptionSlide__text}>
        Текст <br /> сообщения
      </p>

      <article className={styles.descriptionSlide__container}>
        <div ref={divRef} className={styles.descriptionSlide__scrollable_container}>
          <div className={styles.descriptionSlide__text_wrapper}>
            <p
              className={styles.descriptionSlide__content}
              dangerouslySetInnerHTML={{
                __html: productData.product.description,
              }}
            />
          </div>
        </div>
      </article>
      <Decoration keyTrigger={keyTrigger} />
    </section>
  );
}

export default DescriptionSlide;
