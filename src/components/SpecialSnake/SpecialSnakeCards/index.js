import React from "react";
import SpecialCard from "./SpecialCard";
import specialSnake1 from "../../../assets/specialSnake/specialSnake1.png";
import specialSnake2 from "../../../assets/specialSnake/specialSnake2.png";
import specialSnake3 from "../../../assets/specialSnake/specialSnake3.png";
import specialSnake4 from "../../../assets/specialSnake/specialSnake4.png";
import specialSnake5 from "../../../assets/specialSnake/specialSnake5.png";
import specialSnake6 from "../../../assets/specialSnake/specialSnake6.png";
import specialSnake7 from "../../../assets/specialSnake/specialSnake7.png";
import specialSnake8 from "../../../assets/specialSnake/specialSnake8.png";
import specialSnake9 from "../../../assets/specialSnake/specialSnake9.png";
import specialSnake10 from "../../../assets/specialSnake/specialSnake10.png";
import specialSnake11 from "../../../assets/specialSnake/specialSnake11.png";
import specialSnake12 from "../../../assets/specialSnake/specialSnake12.png";
import styles from "./styles.module.scss";
const SpecialSnakeCards = () => {
  return (
    <div className={styles.cards}>
      <SpecialCard src={specialSnake1} />
      <SpecialCard src={specialSnake2} />
      <SpecialCard src={specialSnake3} />
      <SpecialCard src={specialSnake4} />
      <SpecialCard src={specialSnake5} />
      <SpecialCard src={specialSnake6} />
      <SpecialCard src={specialSnake7} />
      <SpecialCard src={specialSnake8} />
      <SpecialCard src={specialSnake9} />
      <SpecialCard src={specialSnake10} />
      <SpecialCard src={specialSnake11} />
      <SpecialCard src={specialSnake12} />
    </div>
  );
};

export default SpecialSnakeCards;
