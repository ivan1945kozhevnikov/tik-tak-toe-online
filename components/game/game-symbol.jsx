import { SYMBOL_O, SYMBOL_X } from "./constants";

export function GameSymbol({ symbol }) {
  const getSymbolClassName = (symbol) => {
    if (symbol === SYMBOL_O) return "text-green-700";
    if (symbol === SYMBOL_X) return "text-red-700";
    return "";
  };

  return (
    <span className={`text-[20px] leading-6 ${getSymbolClassName(symbol)}`}>
      {symbol}
    </span>
  );
}
