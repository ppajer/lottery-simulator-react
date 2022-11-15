export function LotteryContainer({children, title}:LotteryContainerProps): JSX.Element {

  return (
    <main className="lottery">
      <h2 className="lottery-title">
        { title }
      </h2>
      { children }
    </main>
  );
}