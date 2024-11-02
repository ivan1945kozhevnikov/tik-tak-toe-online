import avatarSrc1 from "./ui/images/avatar-1.png";
import avatarSrc2 from "./ui/images/avatar-2.png";
import avatarSrc3 from "./ui/images/avatar-3.png";
import avatarSrc4 from "./ui/images/avatar-4.png";

export const GAME_SIMBOLS = {
  ZERO: "zero",
  CROSS: "cross",
  TRINGLE: "tringle",
  SQUARE: "square",
};

export const MOVE_ORDER = [
  GAME_SIMBOLS.CROSS,
  GAME_SIMBOLS.ZERO,
  GAME_SIMBOLS.TRINGLE,
  GAME_SIMBOLS.SQUARE,
];

export const PLAYERS = [
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
