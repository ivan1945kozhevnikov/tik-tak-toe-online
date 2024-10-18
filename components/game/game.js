import { useGameState } from './use-game-state';
import { GameInfo } from './game-info';
import { GameCell } from './game-cell';
import styles from './game.module.css';

export function Game() {
  const {
    cells,
    currentStep,
    winnerSequence,
    handleCellClick,
    handleResetClick,
    winnerSymbol,
    isDrow,
  } = useGameState();

  return (
    <div className={styles['game']}>
      <GameInfo
        isDrow={isDrow}
        winnerSymbol={winnerSymbol}
        currentStep={currentStep}
      />
      <div className={styles['game-field']}>
        {cells.map((symbol, index) => (
          <GameCell
            symbol={symbol}
            isWinner={winnerSequence?.includes(index)}
            onClick={() => handleCellClick(index)}
          />
        ))}
      </div>
      <button className={styles['reset']} onClick={handleResetClick}>
        Сбросить
      </button>
    </div>
  );
}
