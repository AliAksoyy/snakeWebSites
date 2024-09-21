import React, { useEffect } from "react";
import Telephone from "../components/Telephone";
import GameMode from "../components/GameMode";
import PowerMode from "../components/PowerMode";
import BuildSnake from "../components/BuildSnake";
import CreateSnakeStyle from "../components/CreateSnakeStyle";
import SpecialSnake from "../components/SpecialSnake";
import SnakeNews from "../components/SnakeNews";

const Home = ({ drawerModal }) => {
  useEffect(() => {
    if (drawerModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [drawerModal]);
  return (
    <main>
      <div>
        {" "}
        <Telephone />
      </div>
      <div>
        {" "}
        <GameMode />
      </div>
      <div>
        {" "}
        <PowerMode />
      </div>
      <div>
        {" "}
        <BuildSnake />
      </div>
      <div>
        {" "}
        <CreateSnakeStyle />
      </div>
      <div>
        {" "}
        <SpecialSnake />
      </div>
      <div>
        {" "}
        <SnakeNews />
      </div>
    </main>
  );
};

export default Home;
