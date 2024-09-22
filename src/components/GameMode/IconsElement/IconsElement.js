import React from "react";
import styles from "./styles.module.scss";
import bottle from "../../../assets/gameModeImage/bottle.png";
import top from "../../../assets/gameModeImage/top.png";
import snake from "../../../assets/gameModeImage/snake.png";
import flag from "../../../assets/gameModeImage/flag.png";
import chest from "../../../assets/gameModeImage/chest.png";
import GameModeContent from "../GameModeContent";

const IconsElement = ({ handleClick, languageData, lang }) => {
  return (
    <div className={styles.icons}>
      <GameModeContent
        handleClick={handleClick}
        src={bottle}
        spanText={`${languageData[lang]?.data?.home.gameMode.classicText}`}
        alt="classic"
      />
      <GameModeContent
        handleClick={handleClick}
        src={top}
        spanText={`${languageData[lang]?.data?.home.gameMode.deathMatchText}`}
        alt="deathMatch"
      />
      <GameModeContent
        handleClick={handleClick}
        src={snake}
        spanText={`${languageData[lang]?.data?.home.gameMode.timelineText}`}
        alt="timeLine"
      />
      <GameModeContent
        handleClick={handleClick}
        src={flag}
        spanText={`${languageData[lang]?.data?.home.gameMode.battleRoyaleText}`}
        alt="battleRoyale"
      />
      <GameModeContent
        handleClick={handleClick}
        src={chest}
        spanText={`${languageData[lang]?.data?.home.gameMode.treasureHuntText}`}
        alt="treasureHunt"
      />
    </div>
  );
};

export default IconsElement;
