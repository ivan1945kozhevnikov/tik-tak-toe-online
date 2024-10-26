import { CrossIcon } from "./icons/cross-icon";
import { ZeroIcon } from "./icons/zero-icon";
import { TringleIcon } from "./icons/tringle-icon";
import { SquareIcon } from "./icons/square-icon";
import { GAME_SIMBOLS } from "./constants";

export function GameSymbol({ symbol, className }) {
  const Icon =
    {
      [GAME_SIMBOLS.CROSS]: CrossIcon,
      [GAME_SIMBOLS.ZERO]: ZeroIcon,
      [GAME_SIMBOLS.TRINGLE]: TringleIcon,
      [GAME_SIMBOLS.SQUARE]: SquareIcon,
    }[symbol] ?? CrossIcon;

  return <Icon className={className} />;
}
