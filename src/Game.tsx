import React from "react";
import rock from "../rock.png";
import paper from "../paper.png";
import scissors from "../scissors.png";

interface Choice {
  name: string;
  src: string;
}

interface IGameProps {
  setPicks(item: string): void;
}

const Game: React.FC<IGameProps> = (props: IGameProps) => {
  const items: Choice[] = [
    { name: "rock", src: rock },
    { name: "paper", src: paper },
    { name: "scissors", src: scissors }
  ];

  return (
    <>
      {items.map((item, i) => (
        <ul key={i}>
          <button
            onClick={(e: React.MouseEvent<HTMLElement>) =>
              props.setPicks(item.name)
            }
          >
            <img alt=" " src={item.src} style={{ width: 150, height: 170 }} />
          </button>
        </ul>
      ))}
    </>
  );
};

export default Game;
