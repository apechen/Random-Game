import React, { useEffect, useState } from "react";

interface IScoreProps {
  userPick: string;
  randomPick: string;
}
const Score: React.FC<IScoreProps> = (props: IScoreProps) => {
  const { userPick, randomPick } = props;
  const [gameScore, setGameScore] = useState<number>(0);

  useEffect(() => {
    const calculateScore = (): void => {
      if (userPick === "rock" && randomPick === "scissors") {
        setGameScore((gameScore) => gameScore + 1);
      } else if (userPick === "rock" && randomPick === "paper") {
        setGameScore((gameScore) => gameScore - 1);
      } else if (userPick === "scissors" && randomPick === "paper") {
        setGameScore((gameScore) => gameScore + 1);
      } else if (userPick === "scissors" && randomPick === "rock") {
        setGameScore((gameScore) => gameScore - 1);
      } else if (userPick === "paper" && randomPick === "rock") {
        setGameScore((gameScore) => gameScore + 1);
      } else if (userPick === "paper" && randomPick === "scissors") {
        setGameScore((gameScore) => gameScore - 1);
      } else {
        setGameScore((gameScore) => gameScore + 0);
      }
    };
    calculateScore();
  }, [userPick, randomPick]);

  return (
    <div>
      <h2>You: {userPick} </h2>
      <h2>Random: {randomPick}</h2>
      <h2>Score: {gameScore} </h2>
      {gameScore > 0 ? (
        <h2>You win</h2>
      ) : gameScore === 0 ? (
        <h2>Draw</h2>
      ) : (
        <h2>You lose</h2>
      )}
    </div>
  );
};

export default Score;
