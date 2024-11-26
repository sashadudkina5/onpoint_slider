import "./App.css";
import Slider from "./components/Slider/Slider";
import Header from "./components/Header/Header";
import Logo from "./components/Logo/Logo";
import { useState } from "react";

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [backgroundSlide, setBackgroundSlide] = useState(0);

  return (
    <div className="App">
      <div
        className="App__background"
        style={{
          transform: `translateX(-${(backgroundSlide * 100) / 3}%)`,
        }}
      />
      <Header
        setCurrentSlide={setCurrentSlide}
        setBackgroundSlide={setBackgroundSlide}
      />
      <Slider
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        setBackgroundSlide={setBackgroundSlide}
      />
      <Logo />
    </div>
  );
}

export default App;
