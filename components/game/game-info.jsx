import { GameSymbol } from './game-symbol';

export function GameInfo({ isDrow, winnerSymbol, currentStep }) {
  if (isDrow) {
    return <div className="mb-2.5">Ничья</div>;
  }

  if (winnerSymbol) {
    return (
      <div className="mb-2.5">
        Победитель: <GameSymbol symbol={winnerSymbol} />
      </div>
    );
  }

  return (
    <div className="mb-2.5">
      Ход: <GameSymbol symbol={currentStep} />
    </div>
  );
}
