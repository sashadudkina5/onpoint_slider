import styles from "./styles.module.css";
import homeIcon from "../../assets/home-icon.svg";
import { useRef, useEffect } from "react";

function Header({ setCurrentSlide, setBackgroundSlide }) {
  const homeIconRef = useRef(null);

  useEffect(() => {
    const homeIconElement = homeIconRef.current;

    const handleHomeIconClick = () => {
      setCurrentSlide(0);
      setBackgroundSlide(0);
    };

    homeIconElement.addEventListener("click", handleHomeIconClick);

    return () => {
      homeIconElement.removeEventListener("click", handleHomeIconClick);
    };
  }, [setCurrentSlide, setBackgroundSlide]);

  return (
    <header className={styles.header}>
      <ul className={styles.header__list}>
        <li className={styles.header__item}>
          <nav className={styles.header__navigation} ref={homeIconRef}>
            <img src={homeIcon} alt="На первый слайд" />
          </nav>
        </li>
        <li className={styles.header__item}>
          <span className={styles.header__title}>Project</span>
        </li>
      </ul>
    </header>
  );
}

export default Header;
