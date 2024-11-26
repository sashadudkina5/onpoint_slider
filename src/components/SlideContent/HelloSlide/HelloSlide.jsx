import styles from "./styles.module.css";
import Decoration from "./Decoration";
import { useRef, useEffect } from "react";

function HelloSlide({ setCurrentSlide, setBackgroundSlide, setPreviousSlide }) {
  const buttonRef = useRef(null);

  useEffect(() => {
    const buttonElement = buttonRef.current;
    const handleButtonClick = () => {
      setPreviousSlide(0);
      setCurrentSlide(1);
      setBackgroundSlide(1);
    };
    buttonElement.addEventListener("click", handleButtonClick);
    return () => {
      buttonElement.removeEventListener("click", handleButtonClick);
    };
  }, [setCurrentSlide, setBackgroundSlide, setPreviousSlide]);

  return (
    <section className={styles.helloSlide}>
      <p className={styles.helloSlide__greeting}>Привет,</p>
      <div className={styles.helloSlide__content}>
        <p className={styles.helloSlide__text}>
          это <b>не</b> коммерческое задание
        </p>
        <button ref={buttonRef} className={styles.helloSlide__button}>
          <p className={styles.helloSlide__buttonText}>Что дальше?</p>
        </button>
      </div>

      <Decoration />
    </section>
  );
}

export default HelloSlide;
