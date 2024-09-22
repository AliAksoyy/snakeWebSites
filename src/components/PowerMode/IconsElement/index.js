import React from "react";
import styles from "./styles.module.scss";
import map from "../../../assets/powerModeImage/map.png";
import magnet from "../../../assets/powerModeImage/magnet.png";
import number2x from "../../../assets/powerModeImage/number2x.png";
import snake from "../../../assets/powerModeImage/snake.png";
import number5x from "../../../assets/powerModeImage/number5x.png";
import bottle from "../../../assets/powerModeImage/bottle.png";
import PowerModeContent from "../PowerModeContent";

const IconsElement = ({ handleClick, languageData, lang }) => {
  return (
    <div className={styles.icons}>
      <PowerModeContent
        handleClick={handleClick}
        src={map}
        spanText={`${languageData[lang]?.data?.home.powerMode.magnifierText}`}
        alt="magnifier"
      />
      <PowerModeContent
        handleClick={handleClick}
        src={magnet}
        spanText={`${languageData[lang]?.data?.home.powerMode.magnetText}`}
        alt="magnet"
      />
      <PowerModeContent
        handleClick={handleClick}
        src={number2x}
        spanText={`${languageData[lang]?.data?.home.powerMode["2xMultiplierText"]}`}
        alt="2xMultiplier"
      />
      <PowerModeContent
        handleClick={handleClick}
        src={snake}
        spanText={`${languageData[lang]?.data?.home.powerMode.quickTurnText}`}
        alt="quickTurn"
      />
      <PowerModeContent
        handleClick={handleClick}
        src={number5x}
        spanText={`${languageData[lang]?.data?.home.powerMode["5xMultiplierText"]}`}
        alt="5xMultiplier"
      />
      <PowerModeContent
        handleClick={handleClick}
        src={bottle}
        spanText={`${languageData[lang]?.data?.home.powerMode.healthPotionText}`}
        alt="healthPotion"
      />
    </div>
  );
};

export default IconsElement;
