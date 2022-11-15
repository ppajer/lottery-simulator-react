import { CONFIG } from '../../config/Lottery';
import { useLotteryState } from '../../data/LotteryState';

const timeInSeconds = {
  week: 604800,
  year: 31556926
};

export function LotteryStats(): JSX.Element {
  const { dates } = useLotteryState();
  const timeSpent = dates.current.getTime() - dates.start.getTime();
  const weeksSpent = Math.floor(timeSpent/(timeInSeconds.week*1000))+1;
  const yearsSpent = Math.floor(timeSpent/(timeInSeconds.year*1000));
  const moneySpent = weeksSpent * CONFIG.PRICE;  

  return (
    <div className="stats">
      <div className="stats-row">
        <span className="stats-label">
          Number of tickets:
        </span>
        <span className="stats-value">
          { weeksSpent }
        </span>
      </div>
      <div className="stats-row">
        <span className="stats-label">
          Years spent:
        </span>
        <span className="stats-value">
          { yearsSpent }
        </span>
      </div>
      <div className="stats-row">
        <span className="stats-label">
          Cost of tickets:
        </span>
        <span className="stats-value">
          { moneySpent }
        </span>
      </div>
    </div>
  );
}