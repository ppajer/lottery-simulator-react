import { useLotteryState } from '../../data/LotteryState';
import { Column } from '../Grid/Grid';

export function LotteryNumber({ value }:LotteryNumberProps): JSX.Element {
  const { numbers } = useLotteryState();
  const matchClass = (numbers.winning.indexOf(value) !== -1) ? 'match' : '';
  return (
    <Column width={20}>
      <div className={`lottery-number ${matchClass}`}>
        { value }
      </div>
    </Column>
  );
}