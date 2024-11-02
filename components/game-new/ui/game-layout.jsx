export function GameLayout({ backLink, title, gameInfo }) {
  return (
    <div className="pb-10">
      <div className="pl-2">
        {backLink}
        {title}
        {gameInfo}
      </div>
    </div>
  );
}
