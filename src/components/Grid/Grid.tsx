export function Row({ children, spacing }:GridRowProps): JSX.Element {
  return (
    <div className={`row ${spacing}`}>
      { children }
    </div>
  );
}

export function Column({ children, width, spacing }:GridColumnProps): JSX.Element {
  return (
    <div className={`col col-${width} ${spacing}`}>
      { children }
    </div>
  );
}