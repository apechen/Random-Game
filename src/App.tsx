import React, { useState } from "react";
import Game from "./Game";
import Result from "./Score";
import "./styles.css";

const Heading: React.FC = () => {
  return <h1>Play with Computer</h1>;
};

const Landing: React.FC = () => {
  const [userPick, setUserPick] = useState<string>("");
  const [randomPick, setRandomPick] = useState<string>("");

  const getRandomPick = (): void => {
    const choices = ["paper", "rock", "scissors"];
    const randomIndex = Math.floor(Math.random() * Math.floor(3));
    setRandomPick(choices[randomIndex]);
  };

  const setPicks = (item: string): void => {
    setUserPick(item);
    getRandomPick();
  };

  return (
    <div>
      <Heading />
      <div className="picks">
        <Game setPicks={setPicks} />
      </div>
      <div className="score">
        {userPick && <Result userPick={userPick} randomPick={randomPick} />}
      </div>
    </div>
  );
};

export default Landing;
