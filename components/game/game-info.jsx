import clsx from "clsx";
import { Profile } from "../profile";
import { CrossIcon } from "./icons/cross-icon";
import { GameSymbol } from "./game-symbol";
import { GAME_SIMBOLS } from "./constants";

import avatarSrc1 from "./images/avatar-1.png";
import avatarSrc2 from "./images/avatar-2.png";
import avatarSrc3 from "./images/avatar-3.png";
import avatarSrc4 from "./images/avatar-4.png";

const players = [
  {
    id: 1,
    name: "Paromovevg",
    rating: 1230,
    avatar: avatarSrc1,
    symbol: GAME_SIMBOLS.CROSS,
  },
  {
    id: 2,
    name: "VereIntedinglapotur",
    rating: 850,
    avatar: avatarSrc2,
    symbol: GAME_SIMBOLS.ZERO,
  },
  {
    id: 3,
    name: "Lara",
    rating: 1400,
    avatar: avatarSrc3,
    symbol: GAME_SIMBOLS.TRINGLE,
  },
  {
    id: 4,
    name: "Додик",
    rating: 760,
    avatar: avatarSrc4,
    symbol: GAME_SIMBOLS.SQUARE,
  },
];

export function GameInfo({ className, playersCount }) {
  return (
    <div
      className={clsx(
        className,
        "grid justify-between bg-white rounded-2xl shadow-md px-8 py-4 grid-cols-2 gap-3",
      )}
    >
      {players.slice(0, playersCount).map((player, index) => (
        <PlayerInfo
          key={player.id}
          playerInfo={player}
          isRight={index % 2 === 1}
        />
      ))}
    </div>
  );
}

function PlayerInfo({ playerInfo, isRight }) {
  return (
    <div className="flex gap-3 items-center">
      <div className={clsx("relative", isRight && "order-3")}>
        <Profile
          className="w-44"
          name={playerInfo.name}
          rating={playerInfo.rating}
          avatar={playerInfo.avatar}
        />
        <div className="w-5 h-5 flex justify-center items-center rounded-full bg-white shadow absolute -left-1 -top-1">
          <GameSymbol symbol={playerInfo.symbol} />
        </div>
      </div>
      <div className={clsx("h-6 w-px bg-slate-200", isRight && "order-2")} />
      <div
        className={clsx(
          "text-slate-900 text-lg font-semibold",
          isRight && "order-1",
        )}
      >
        01:08
      </div>
    </div>
  );
}
