import styles from "./styles.module.css";
import React, { useRef, useState, useEffect } from "react";
import HelloSlide from "../SlideContent/HelloSlide/HelloSlide";
import DescriptionSlide from "../SlideContent/DescriptionSlide/DescriptionSlide";
import KeyMessageSlide from "../SlideContent/KeyMessageSlide/KeyMessageSlide";

function Slider({ currentSlide, setCurrentSlide, setBackgroundSlide }) {
  const sliderRef = useRef(null);
  const totalSlides = 3;
  const SWIPE_THRESHOLD = 50;
  const [keyTrigger, setKeyTrigger] = useState(0);
  const [previousSlide, setPreviousSlide] = useState(null);

  let startX = null;
  let endX = null;

  const handleStart = (event) => {
    startX = event.touches ? event.touches[0].clientX : event.clientX;
  };

  const handleMove = (event) => {
    if (startX !== null) {
      endX = event.touches ? event.touches[0].clientX : event.clientX;
    }
  };

  const handleEnd = () => {
    if (startX === null || endX === null) return;

    const deltaX = endX - startX;

    if (Math.abs(deltaX) > SWIPE_THRESHOLD) {
      if (deltaX > 0 && currentSlide > 0) {
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
        setBackgroundSlide((prev) => Math.max(prev - 1, 0));
      } else if (deltaX < 0 && currentSlide < totalSlides - 1) {
        setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
        setBackgroundSlide((prev) => Math.min(prev + 1, totalSlides - 1));
      }
    }
    startX = null;
    endX = null;

    setPreviousSlide(currentSlide);
  };

  useEffect(() => {
    if (currentSlide === 1 && previousSlide === 0) {
      setKeyTrigger((prev) => prev + 1);
    }
  }, [currentSlide, previousSlide]);

  useEffect(() => {
    const slider = sliderRef.current;

    slider.addEventListener("touchstart", handleStart);
    slider.addEventListener("touchmove", handleMove);
    slider.addEventListener("touchend", handleEnd);
    slider.addEventListener("mousedown", handleStart);
    slider.addEventListener("mousemove", handleMove);
    slider.addEventListener("mouseup", handleEnd);

    return () => {
      slider.removeEventListener("touchstart", handleStart);
      slider.removeEventListener("touchmove", handleMove);
      slider.removeEventListener("touchend", handleEnd);
      slider.removeEventListener("mousedown", handleStart);
      slider.removeEventListener("mousemove", handleMove);
      slider.removeEventListener("mouseup", handleEnd);
    };
  }, [currentSlide]);

  return (
    <div ref={sliderRef} className={styles.slider}>
      <div
        className={styles.slider__track}
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: "transform 0.3s ease-in-out",
        }}
      >
        <div className={styles.slider__slide}>
          <HelloSlide
            setCurrentSlide={setCurrentSlide}
            setBackgroundSlide={setBackgroundSlide}
            setPreviousSlide={setPreviousSlide}
          />
        </div>
        <div className={styles.slider__slide}>
          <DescriptionSlide keyTrigger={keyTrigger} />
        </div>
        <div className={styles.slider__slide}>
          <KeyMessageSlide />
        </div>
      </div>
    </div>
  );
}

export default Slider;
