import React from "react";
import styles from "./styles.module.scss";
import SnakeCard from "../SnakeCard";
import snake1 from "../../../assets/createSnakeImage/snake1.png";
import snake2 from "../../../assets/createSnakeImage/snake2.png";
import snake3 from "../../../assets/createSnakeImage/snake3.png";
import snake4 from "../../../assets/createSnakeImage/snake4.png";
import snake5 from "../../../assets/createSnakeImage/snake5.png";
import snake6 from "../../../assets/createSnakeImage/snake6.png";
import snake7 from "../../../assets/createSnakeImage/snake7.png";
import snake8 from "../../../assets/createSnakeImage/snake8.png";
import snake9 from "../../../assets/createSnakeImage/snake9.png";
import snake10 from "../../../assets/createSnakeImage/snake10.png";
import snake11 from "../../../assets/createSnakeImage/snake11.png";
import snake12 from "../../../assets/createSnakeImage/snake12.png";

const SnakeIcons = () => {
  const ImageSlider = () => {
    return (
      <div className={styles.snakeIconsSlide}>
        <SnakeCard src={snake1} />
        <SnakeCard src={snake2} />
        <SnakeCard src={snake3} />
        <SnakeCard src={snake4} />
        <SnakeCard src={snake5} />
        <SnakeCard src={snake6} />
        <SnakeCard src={snake7} />
        <SnakeCard src={snake8} />
        <SnakeCard src={snake9} />
        <SnakeCard src={snake10} />
        <SnakeCard src={snake11} />
        <SnakeCard src={snake12} />
      </div>
    );
  };
  return (
    <div className={styles.snakeIcons}>
      {ImageSlider()} {ImageSlider()}
    </div>
  );
};

export default SnakeIcons;
