export function LotteryControl({ name, handler, buttonClass }:LotteryControlProps): JSX.Element {
  return (
    <button className={`btn btn-${buttonClass}`} onClick={handler}>
      { name }
    </button>
  );
}